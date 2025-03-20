import { BsPen } from "react-icons/bs";

export default function EditSection({ top, right }) {
  {
    /* goup is applied ot header wrapper div, and group-hover is applied to EditSection wrapper div
    meaning that each time the mouse enters group section, the icon will be visible*/
  }
  return (
    <div
      className={`absolute ${top} ${right} opacity-0 group-hover:opacity-100 h-[40px] w-[40px] bg-[#0D766E] rounded-full flex items-center justify-center 
                  shadow-[0px_8px_24px_4px_rgba(0,0,0,0.6)] hover:shadow-[0px_12px_36px_6px_rgba(0,0,0,0.7)] 
                  transition-all duration-300`}
    >
      <BsPen className="text-white text-lg cursor-pointer" />
    </div>
  );
}
