import { BsPlus } from "react-icons/bs";

export default function EditSection({ top, right }) {
  return (
    <div
      className={`absolute ${top} ${right} h-[40px] w-[40px] bg-[#0D766E] rounded-full flex items-center justify-center 
                  shadow-[0px_8px_24px_4px_rgba(0,0,0,0.6)] hover:shadow-[0px_12px_36px_6px_rgba(0,0,0,0.7)] 
                  transition-all duration-300`}
    >
      <BsPlus className="text-white text-lg cursor-pointer  h-[30px] w-[30px]" />
    </div>
  );
}
