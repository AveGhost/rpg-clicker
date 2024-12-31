import { useContext } from "react"
import { playerInfoContext } from "../../context/player-info.context"
import { Icon } from "@iconify/react/dist/iconify.js"
const PlayerStats = () => {
    const { strength, dexterity, endurance, luck, skillPoints, increaseStat } = useContext(playerInfoContext)

    return (
        <div className="mt-6 flex flex-col justify-center min-h-[640px] gap-8">
            <h2 className="text-xl font-medium px-4">Skill points: {skillPoints}</h2>
            <ul className="flex flex-col gap-12">
                <li className="flex gap-3 items-center justify-between p-4 max-w-[250px] border border-[#A1662F] rounded-full">
                    <div className="flex gap-3 items-center">
                        <div className="relative group">
                            <Icon icon="akar-icons:info" width="18" height="18" style={{color: '#fff'}} /> 
                            <div className="absolute border border-zinc-400 bg-black/40 min-w-[180px] top-[-200%] right-[100%] p-3 text-[.7rem] rounded-lg z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Increse damage</div>
                        </div>
                        <span className="text-xl font-medium">Strength</span>
                    </div>
                    <div className="flex gap-3">
                        <span>{strength}</span><span className="cursor-pointer" onClick={() => increaseStat('strength')}>+</span>
                    </div>
                </li>
                <li className="flex gap-3 items-center justify-between p-4 max-w-[250px] border border-[#A1662F] rounded-full">
                    <div className="flex gap-3 items-center">
                        <div className="relative group">
                            <Icon icon="akar-icons:info" width="18" height="18" style={{color: '#fff'}} /> 
                            <div className="absolute border border-zinc-400 bg-black/40 min-w-[180px] top-[-200%] right-[100%] p-3 text-[.7rem] rounded-lg z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Increse dodge chance</div>
                        </div>
                        <span className="text-xl font-medium">Dexterity</span>
                    </div>
                    <div className="flex gap-3">
                        <span>{dexterity}</span><span className="cursor-pointer" onClick={() => increaseStat('dexterity')}>+</span>
                    </div>
                </li>
                <li className="flex gap-3 items-center justify-between p-4 max-w-[250px] border border-[#A1662F] rounded-full">
                    <div className="flex gap-3 items-center">
                        <div className="relative group">
                            <Icon icon="akar-icons:info" width="18" height="18" style={{color: '#fff'}} /> 
                            <div className="absolute border border-zinc-400 bg-black/40 min-w-[180px] top-[-200%] right-[100%] p-3 text-[.7rem] rounded-lg z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Increse health</div>
                        </div>
                        <span className="text-xl font-medium">Endurance</span>
                    </div>
                    <div className="flex gap-3">
                        <span>{endurance}</span><span className="cursor-pointer" onClick={() => increaseStat('endurance')}>+</span>
                    </div>
                </li>
                <li className="flex gap-3 items-center justify-between p-4 max-w-[250px] border border-[#A1662F] rounded-full">
                    <div className="flex gap-3 items-center">
                        <div className="relative group">
                            <Icon icon="akar-icons:info" width="18" height="18" style={{color: '#fff'}} /> 
                            <div className="absolute border border-zinc-400 bg-black/40 min-w-[180px] top-[-200%] right-[100%] p-3 text-[.7rem] rounded-lg z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Increse critical hit chance</div>
                        </div>
                        <span className="text-xl font-medium">Luck</span>
                    </div>
                    <div className="flex gap-3">
                        <span>{luck}</span><span className="cursor-pointer" onClick={() => increaseStat('luck')}>+</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PlayerStats