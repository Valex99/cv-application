import ProfilePicture from "./ProfilePicture";
import { BsChatLeftDots, BsPhone, BsPinMap } from "react-icons/bs";

export default function Header({ children }) {
  return (
    <div className="relative flex items-center justify-end p-5 bg-[#0D766E] h-[250px]">
      {/* Profile Picture on the left side */}
      <ProfilePicture />
      {/* Text content aligned to the right */}
      <div className="text-left text-white">
        <h1 className="text-[24px] font-bold leading-tight">Matej Valencic</h1>
        <h2 className="text-[16px] font-medium ">Front-End Engineer</h2>

        <p className="text-sm mt-[15px] mb-[15px]">
          <BsChatLeftDots className="inline-block mr-2 text-lg" />
          mail: mval.fx@gmail.com
        </p>

        <p className="text-sm mt-[15px] mb-[15px]">
            <BsPhone className="inline-block mr-2 text-lg"/>
            +38670710818
        </p>

        <p className="text-sm mt-[15px] mb-[15px]">
        <BsPinMap className="inline-block mr-2 text-lg"/>
            Postojna, Slovenia</p>
      </div>
      {children}
    </div>
  );
}
