import PrimaryButton from "../../action-button/primary-button.component"
import BuyButton from "../../action-button/buy-button.component"

const Player = ({name, avatar, hp, defaultHp, isPlayer, damage, gold, doubleExp}) => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-3xl">{name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700 relative">
                <span className='absolute top-0 left-2 text-white text-[.7rem]'>{Math.floor(hp)}/{defaultHp}</span>
                <div className="bg-[#ff0000] h-5 rounded-full" style={{width: `calc(100% * ${Math.floor(hp)} / ${defaultHp})`}}></div>
            </div>
            <img src={avatar} className="rounded-lg w-[350px] aspect-square object-cover" alt="Avatar" />
            {isPlayer && (
                    <>
                        <PrimaryButton name="Attack" icon="ri:sword-line" onClick={() => damage()} />
                        <BuyButton onClick={() => doubleExp()} gold={gold} requiredGold={50} name="Exp x2 for 3 rounds" icon="material-symbols-light:money-bag" price={50} />
                    </>
                )
            }
        </div>
    )
}

export default Player