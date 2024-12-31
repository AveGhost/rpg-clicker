import { Icon } from "@iconify/react/dist/iconify.js"

const Player = ({name, avatar, hp, defaultHp, isPlayer, damage}) => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-3xl">{name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700 relative">
                <span className='absolute top-0 left-2 text-white text-[.7rem]'>{hp}/{defaultHp}</span>
                <div className="bg-[#ff0000] h-5 rounded-full" style={{width: `calc(100% * ${hp} / ${defaultHp})`}}></div>
            </div>
            <img src={avatar} className="rounded-lg w-[350px] aspect-square object-cover" alt="Avatar" />
            {isPlayer && <button onClick={() => damage()} className="bg-[#A1662F] text-white rounded-full flex justify-center gap-3 py-2 border border-transparent hover:bg-opacity-30 hover:border-[#A1662F] transition-all duration-300">Attack <Icon icon="ri:sword-line" width="24" height="24"  style={{color: '#fff'}} /></button>}
        </div>
    )
}

export default Player