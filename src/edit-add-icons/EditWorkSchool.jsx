import { BsPen } from "react-icons/bs";

export default function EditWorkSchool() {
  // Later pass an argument to that function { onClick }

  // It should only be visible once mouse is above current Work/ School section
  return (
    <div
      className="absolute -top-1 right-0 opacity-0 group-hover:opacity-100 h-[45px] w-[45px] rounded-full flex items-center justify-center 
                  shadow-[0px_8px_24px_4px_rgba(0,0,0,0.6)]  
                  transition-all duration-300"
      //onClick={onClick}
    >
      <BsPen className="text-black text-lg cursor-pointer" />
    </div>
  );
}
