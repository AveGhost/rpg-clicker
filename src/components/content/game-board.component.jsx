import { useState, useEffect, useContext } from "react"
import Player from "./game-players/player.component"
import GameLogs from "../aside/game-logs.component"
import { playerInfoContext } from "../../context/player-info.context"
import { MonsterInfoContext } from "../../context/monster-info.context"
import RewardModal from "./reward-modal/reward-modal.component"

const GameBorad = () => {
    const [battleEndInfo, setBattleEndInfo] = useState({
        who: '',
        text: ''
    })
    const [gameInfoLogs, setGameInfoLogs] = useState({
        exp: null,
        gold: null
    })
    const [battleLogs, setBattleLogs] = useState([])
    const [isOver, setIsOver] = useState(false)
    const { exp, setExp, gold, setGold, lvlUp, defaultPlayerHp, strength, dexterity, luck } = useContext(playerInfoContext)
    const { defaultMonsterHp, monsterStrength, monsterDexterity, monsterLuck } = useContext(MonsterInfoContext)
    const [playerHp, setPlayerHp] = useState(defaultPlayerHp)
    const [monsterHp, setMonsterHp] = useState(defaultMonsterHp)

    const playerAttack = (damage) => {
        setMonsterHp(monsterHp - damage)
        battleLogs.push({who: 'player', text: `Player attacked for ${damage} damage`})
        if(monsterHp - damage <= 0) { return }
    }

    const monsterAttack = (damage) => {
        setPlayerHp(playerHp - damage)
        battleLogs.push({who: 'monster', text: `Monster attacked for ${damage} damage`})
        if(playerHp - damage <= 0) { return }
    }

    const playerTurn = () => {
        let damage = Math.floor(Math.random() * 10) + 1 + (strength * 0.4)
        const evade = Math.floor(Math.random() * 100) + 1 <= monsterDexterity
        const criticalHitChance = Math.floor(Math.random() * 100) + 1 <= luck * 0.5
        if(!evade && !criticalHitChance) {
            playerAttack(damage)
        }
        if(evade){
            battleLogs.push({who: 'monster', text: 'Monster dodged the attack'})
            return
        }
        if(criticalHitChance) {
            let criticalHit = (10 + damage) * 2
            setMonsterHp(monsterHp - criticalHit)
            battleLogs.push({who: 'player', text: `Critical hit! Player attacked for ${criticalHit} damage`})
            return
        }
    }

    const monsterTurn = () => {
        let damage = Math.floor(Math.random() * 10) + 1 + (monsterStrength * 0.4)
        const evade = Math.floor(Math.random() * 100) + 1 <= dexterity
        const criticalHitChance = Math.floor(Math.random() * 100) + 1 <= monsterLuck * 0.5
        if(!evade && !criticalHitChance) {
            monsterAttack(damage)
        }
        if(evade){
            battleLogs.push({who: 'player', text: 'Player dodged the attack'})
            return
        }
        if(criticalHitChance) {
            let criticalHit = (10 + damage) * 2
            setPlayerHp(playerHp - criticalHit)
            battleLogs.push({who: 'monster', text: `Critical hit! Monster attacked for ${criticalHit} damage`})
            return
        }
    }

    const handleBattle = () => {
        playerTurn()
        monsterTurn()
        setBattleLogs([...battleLogs])
    }

    const gameOver = () => {
        if (playerHp <= 0) {
            setBattleEndInfo({who: 'monster', text: 'Monster won'})
            setGameInfoLogs({exp: 2, gold: 0})
            setExp(exp + 20)
            setIsOver(true)
        } else if (monsterHp <= 0) {
            setBattleEndInfo({who: 'player', text: 'Player won'})
            setGameInfoLogs({exp: 10, gold: 5})
            setExp(exp + 80)
            setGold(gold + 5)
            setIsOver(true)
        }
    }

    const claimReward = () => {
        setIsOver(false)
        setBattleLogs([])
        setBattleEndInfo({who: '', text: ''})
        setGameInfoLogs({exp: null, gold: null})
        setMonsterLogs({who: 'monster', text: ''})
        setPlayerLogs({who: 'player', text: ''})
        setPlayerHp(defaultPlayerHp)
        setMonsterHp(defaultMonsterHp)
    }

    useEffect(() => {
        setBattleLogs([...battleLogs, battleEndInfo])
    },[battleEndInfo])

    useEffect(() => {
        gameOver()
        lvlUp()
    },[playerHp, monsterHp])

    useEffect(() => {
        setPlayerHp(defaultPlayerHp)
    },[defaultPlayerHp])

    useEffect(() => {
        setMonsterHp(defaultMonsterHp)
    },[defaultMonsterHp])

    return (
        <>
            <div className="flex gap-10">
                <Player name={'AveGhost'} hp={playerHp} defaultHp={defaultPlayerHp} avatar={'/avatar.webp'} isPlayer={true} damage={handleBattle} />
                <Player name={'Ghoul'} hp={monsterHp} defaultHp={defaultMonsterHp} avatar={'/monster.avif'} isPlayer={false} />
            </div>
            <GameLogs battleLogs={battleLogs} gameInfoLogs={gameInfoLogs} />
            {isOver && <RewardModal exp={gameInfoLogs.exp} gold={gameInfoLogs.gold} claim={claimReward} />}
        </>
    )
}

export default GameBorad