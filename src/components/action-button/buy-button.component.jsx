import { Icon } from "@iconify/react/dist/iconify.js"
const BuyButton = ({name, icon, price, gold, requiredGold, onClick}) => {
    return (
        <button onClick={onClick} disabled={gold < requiredGold} className="border border-[#A1662F] text-white rounded-full text-[.8rem] flex justify-center gap-3 py-2 hover:bg-opacity-30 hover:border-[#A1662F] hover:bg-[#A1662F] transition-all duration-300">
            {name} 
            <span className="flex items-center">(<Icon icon={icon} width="18" height="18" style={{color: '#fff'}} />{price})</span></button>
    )
}

export default BuyButton