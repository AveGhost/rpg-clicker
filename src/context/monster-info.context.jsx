import { createContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const MonsterInfoContext = createContext()

const MonsterInfoProvider = ({ children }) => {
    const [defaultMonsterHp, setDefaultMonsterHp] = useLocalStorageState('monsterHp', {defaultValue: 100})
    const [monsterStrength, setMonsterStrength] = useLocalStorageState('monsterStrength', {defaultValue: 10})
    const [monsterDexterity, setMonsterDexterity] = useLocalStorageState('monsterDexterity', {defaultValue: 10})
    const [monsterLuck, setMonsterLuck] = useLocalStorageState('monsterLuck', {defaultValue: 10})
    const [monsterEndurance, setMonsterEndurance] = useLocalStorageState('monsterEndurance', {defaultValue: 10})
    const [wasAdded, setIsWasAdded] = useLocalStorageState('wasAdded', {defaultValue: false})

    const monsterLvlUp = (playerLvl) => {
        if(playerLvl % 5 === 0) {
            if(!wasAdded) {
                setDefaultMonsterHp(defaultMonsterHp + 3)
                setMonsterStrength(monsterStrength + 1)
                setMonsterDexterity(monsterDexterity + 1)
                setMonsterLuck(monsterLuck + 1)
                setMonsterEndurance(monsterEndurance + 1)
                setIsWasAdded(true)
            }
        } else {
            setIsWasAdded(false)
        }
    }

    return (
        <MonsterInfoContext.Provider
            value={{defaultMonsterHp, setDefaultMonsterHp, monsterStrength, setMonsterStrength, monsterDexterity, setMonsterDexterity, monsterLuck, setMonsterLuck, monsterEndurance, setMonsterEndurance, monsterLvlUp}}>
            {children}
        </MonsterInfoContext.Provider>
    )
}

export { MonsterInfoProvider, MonsterInfoContext }