import { BsPlus } from "react-icons/bs";

export default function EditSection({ top, right, onClick }) {
  return (
    <div
      className={`absolute ${top} ${right} opacity-0 group-hover:opacity-100 h-[45px] w-[45px] bg-[#0D766E] hover:bg-[#0A5F5A] active:bg-[#094F4C] rounded-full flex items-center justify-center 
                  shadow-[0px_8px_24px_4px_rgba(0,0,0,0.6)]  
                  transition-all duration-300`}
      onClick={onClick}
    >
      <BsPlus className="text-white text-lg cursor-pointer  h-[30px] w-[30px]" />
    </div>
  );
}
