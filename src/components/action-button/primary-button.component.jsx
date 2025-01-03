import { Icon } from "@iconify/react/dist/iconify.js"
const PrimaryButton = ({name, icon, onClick}) => {
    return (
        <button onClick={onClick} className="bg-[#A1662F] text-white rounded-full flex justify-center gap-3 py-2 border border-transparent hover:bg-opacity-30 hover:border-[#A1662F] transition-all duration-300">{name} {icon && <Icon icon={icon} width="24" height="24" style={{color: '#fff'}} />}</button>
    )
}

export default PrimaryButton