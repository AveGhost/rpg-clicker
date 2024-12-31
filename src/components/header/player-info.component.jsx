import {Icon} from '@iconify/react'
import { useContext } from 'react'
import { playerInfoContext } from '../../context/player-info.context'

const PlayerInfo = () => {
    const { lvl, exp, gold, requiredExp } = useContext(playerInfoContext)
    return ( 
        <div className='flex gap-3 col-span-3'>
            <img src="/avatar.webp" className='w-[72px] h-[72px] rounded-full' alt="Player avatar" />
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                    <h2 className='text-3xl font-medium'>AveGhost</h2>
                    <span className='border border-[#A1662F] rounded-full w-[23px] h-[24px] flex justify-center items-center text-white text-[.8rem]'>{lvl}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative">
                    <span className='absolute top-0 left-2 text-white text-[.5rem]'>{exp}/{requiredExp}</span>
                    <div className="bg-[#A1662F] h-3 rounded-full" style={{width: `calc(100% * ${exp} / ${requiredExp})`}}></div>
                </div>
                <p className='flex gap-3 items-center'><Icon icon="material-symbols-light:money-bag" width="24" height="24"  style={{color: '#A1662F'}} /> {gold}</p>
            </div>
        </div>
    )
}

export default PlayerInfo