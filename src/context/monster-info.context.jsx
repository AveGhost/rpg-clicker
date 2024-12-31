import { createContext } from "react";
import useLocalStorageState from "use-local-storage-state";

const MonsterInfoContext = createContext()

const MonsterInfoProvider = ({ children }) => {
    const [defaultMonsterHp, setDefaultMonsterHp] = useLocalStorageState('monsterHp', {defaultValue: 100})
    const [monsterStrength, setMonsterStrength] = useLocalStorageState('monsterStrength', {defaultValue: 10})
    const [monsterDexterity, setMonsterDexterity] = useLocalStorageState('monsterDexterity', {defaultValue: 10})
    const [monsterLuck, setMonsterLuck] = useLocalStorageState('monsterLuck', {defaultValue: 10})
    const [monsterEndurance, setMonsterEndurance] = useLocalStorageState('monsterEndurance', {defaultValue: 10})


    return (
        <MonsterInfoContext.Provider
            value={{defaultMonsterHp, setDefaultMonsterHp, monsterStrength, setMonsterStrength, monsterDexterity, setMonsterDexterity, monsterLuck, setMonsterLuck, monsterEndurance, setMonsterEndurance}}>
            {children}
        </MonsterInfoContext.Provider>
    )
}

export { MonsterInfoProvider, MonsterInfoContext }