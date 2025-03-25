import { BsPen } from "react-icons/bs";

export default function EditSection({ top, right, onClick }) {
  {
    /* goup is applied ot header wrapper div, and group-hover is applied to EditSection wrapper div
    meaning that each time the mouse enters group section, the icon will be visible*/
  }
  return (
    <div
      className={`absolute ${top} ${right} cursor-pointer opacity-0 group-hover:opacity-100 h-[45px] w-[45px] bg-[#0D766E] hover:bg-[#0A5F5A] active:bg-[#094F4C] rounded-full flex items-center justify-center active:scale-95
                  transition-all duration-300`}
      style={{
        boxShadow:
          "0 3px 4px #00000024, 0 3px 3px -2px #0000001f, 0 1px 8px #0003",
      }}
      onClick={onClick} // Trigger the passed onClick handler here //EXPLAIN THIS
    >
      <BsPen className="text-white text-lg cursor-pointer" />
    </div>
  );
}
