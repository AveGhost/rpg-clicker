import { Icon } from "@iconify/react/dist/iconify.js"

const playerStatsButton = ({statName, increaseStat, statValue, statDescription}) => {
    return (
        <li className="flex gap-3 items-center justify-between p-4 max-w-[250px] border border-[#A1662F] rounded-full">
            <div className="flex gap-3 items-center">
                <div className="relative group">
                    <Icon icon="akar-icons:info" width="18" height="18" style={{color: '#fff'}} /> 
                    <div className="absolute border border-zinc-400 bg-black/40 min-w-[180px] top-[-200%] right-[100%] p-3 text-[.7rem] rounded-lg z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{statDescription}</div>
                </div>
                <span className="text-xl font-medium">{statName}</span>
            </div>
            <div className="flex gap-3">
                <span>{statValue}</span><span className="cursor-pointer" onClick={() => increaseStat(statName.toLowerCase())}>+</span>
            </div>
        </li>
    )
}

export default playerStatsButton