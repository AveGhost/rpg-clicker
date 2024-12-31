import { createContext } from "react";
import useLocalStorageState from 'use-local-storage-state';

const playerInfoContext = createContext();

const PlayerInfoProvider = ({children}) => {
    const [lvl, setLvl] = useLocalStorageState('lvl', {defaultValue: 1})
    const [exp, setExp] = useLocalStorageState('exp', {defaultValue: 0})
    const [skillPoints, setSkillPoints] = useLocalStorageState('skillPoints', {defaultValue: 10})
    const [requiredExp, setRequiredExp] = useLocalStorageState('requiredExp', {defaultValue: 100})
    const [gold, setGold] = useLocalStorageState('gold', {defaultValue: 0})
    const [defaultPlayerHp, setDefaultPlayerHp] = useLocalStorageState('playerHp', {defaultValue: 100})
    const [playerDamage, setPlayerDamage] = useLocalStorageState('playerDamage', {defaultValue: 10})
    const [strength, setStrength] = useLocalStorageState('strength', {defaultValue: 10})
    const [dexterity, setDexterity] = useLocalStorageState('dexterity', {defaultValue: 10})
    const [endurance, setEndurance] = useLocalStorageState('endurance', {defaultValue: 10})
    const [luck, setLuck] = useLocalStorageState('luck', {defaultValue: 10})

    const lvlUp = () => {
        if(exp >= requiredExp) {
            setLvl(lvl + 1)
            setSkillPoints(skillPoints + 1)
            setExp(exp - requiredExp)
            setRequiredExp(requiredExp + 20)
        }
    }

    const increaseStat = (stat) => {
        if(skillPoints > 0) {
            setSkillPoints(skillPoints - 1)
            if(stat === 'strength') {
                setStrength(strength + 1)
            } else if (stat === 'dexterity') {
                setDexterity(dexterity + 1)
            } else if (stat === 'endurance') {
                setEndurance(endurance + 1)
                setDefaultPlayerHp(defaultPlayerHp + 3)
            } else if (stat === 'luck') {
                setLuck(luck + 1)
            }
        }
    }

    return (
        <playerInfoContext.Provider value={{lvl, setLvl, exp, setExp, requiredExp, setRequiredExp, gold, setGold, strength, setStrength, dexterity, setDexterity, endurance, setEndurance, luck, setLuck, lvlUp, skillPoints, setSkillPoints, defaultPlayerHp, setDefaultPlayerHp, increaseStat, playerDamage, setPlayerDamage}}>
            {children}
        </playerInfoContext.Provider>
    )
}

export {playerInfoContext, PlayerInfoProvider}