import { Icon } from "@iconify/react/dist/iconify.js"

const RewardModal = ({exp, gold, claim}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50 flex justify-center items-center">
            <div className="border border-[#A1662F] bg-black/40 p-6 rounded-lg w-[400px]">
                <h3 className="text-3xl text-center mb-4">Battle Over</h3>
                <h4 className="text-xl font-medium">Rewards:</h4>
                <ul className="flex flex-col gap-3 mt-6">
                    <li className="flex justify-between items-center">EXP: <span className="flex gap-3 items-center">{exp}<Icon icon="mdi:star-four-points-box-outline" width="24" height="24"  style={{color: '#fff'}} /></span></li>
                    <li className="flex justify-between items-center">GOLD: <span className="flex gap-3 items-center">{gold}<Icon icon="material-symbols-light:money-bag" width="24" height="24"  style={{color: '#A1662F'}} /></span></li>
                </ul>
                <button onClick={() => claim()} className="bg-[#A1662F] text-white w-full rounded-full py-2 mt-4 border border-transparent hover:bg-opacity-30 hover:border-[#A1662F] transition-all duration-300">Claim</button>
            </div>
        </div>
    )
}

export default RewardModal