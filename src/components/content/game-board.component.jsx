import { useState, useEffect, useContext } from "react"
import Player from "./game-players/player.component"
import GameLogs from "../aside/game-logs.component"
import { playerInfoContext } from "../../context/player-info.context"
import RewardModal from "./reward-modal/reward-modal.component"

const GameBorad = () => {
    const [monsterHp, setMonsterHp] = useState(100)
    const [playerLogs, setPlayerLogs] = useState({
        who: 'player',
        text: ''
    })
    const [monsterLogs, setMonsterLogs] = useState({
        who: 'monster',
        text: ''
    })
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
    const [playerHp, setPlayerHp] = useState(defaultPlayerHp)

    const playerAttack = () => {
        let damage = Math.floor(Math.random() * 10) + 1 + (strength * 0.4)
        const evade = Math.floor(Math.random() * 100) + 1 <= dexterity
        const criticalHitChance = Math.floor(Math.random() * 100) + 1 <= luck * 0.5
        if(criticalHitChance) {
            let criticalHit = (10 + damage) * 2
            setMonsterHp(monsterHp - criticalHit)
            setPlayerLogs({...playerLogs, text: `Critical hit! Player attacked for ${criticalHit} damage`})
        } else {
            setMonsterHp(monsterHp - damage)
            setPlayerLogs({...playerLogs, text: `Player attacked for ${damage} damage`})
        }
        if(monsterHp - damage <= 0) { return }
        if(evade) {
            setPlayerLogs({...playerLogs, text: 'Player dodged the attack'})
            return
        }
        monsterAttack()
    }

    const monsterAttack = () => {
        const damage = Math.floor(Math.random() * 10) + 1
        setPlayerHp(playerHp - damage)
        setMonsterLogs({...monsterLogs, text: `Monster attacked for ${damage} damage`})
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
        setMonsterHp(100)
    }

    useEffect(() => {
        setBattleLogs([...battleLogs, playerLogs, monsterLogs, battleEndInfo])
    },[playerLogs, monsterLogs, battleEndInfo])

    useEffect(() => {
        gameOver()
        lvlUp()
    },[playerHp, monsterHp])

    useEffect(() => {
        setPlayerHp(defaultPlayerHp)
    },[defaultPlayerHp])

    return (
        <>
            <div className="flex gap-10">
                <Player name={'AveGhost'} hp={playerHp} defaultHp={defaultPlayerHp} avatar={'/avatar.webp'} isPlayer={true} damage={playerAttack} />
                <Player name={'Ghoul'} hp={monsterHp} defaultHp={100} avatar={'/monster.avif'} isPlayer={false} />
            </div>
            <GameLogs battleLogs={battleLogs} gameInfoLogs={gameInfoLogs} />
            {isOver && <RewardModal exp={gameInfoLogs.exp} gold={gameInfoLogs.gold} claim={claimReward} />}
        </>
    )
}

export default GameBorad