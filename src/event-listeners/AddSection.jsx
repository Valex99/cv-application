import { BsPlus } from "react-icons/bs";

export default function EditSection({ top, right, onClick }) {
  return (
    <div
      className={`absolute ${top} ${right} cursor-pointer opacity-0 group-hover:opacity-100 h-[45px] w-[45px] bg-[#0D766E] hover:bg-[#0A5F5A] active:bg-[#094F4C] rounded-full flex items-center justify-center active:scale-95
                  transition-all duration-300`}
      style={{
        boxShadow:
          "0 3px 4px #00000024, 0 3px 3px -2px #0000001f, 0 1px 8px #0003",
      }}
      onClick={onClick}
    >
      <BsPlus className="text-white text-lg cursor-pointer  h-[30px] w-[30px]" />
    </div>
  );
}
