import AddSection from "./AddSection";

export default function Experience({ children }) {
  return (
    <div className="group text-black p-5 relative">
      <h2 className="text-[32px] mb-[20px] leading-tight">Experience</h2>
      <h1 className="text-[19px] font-bold leading-tight">
        Front-End Engineer
      </h1>
      <p className="text-[16px]">Google</p>
      <p className="text-[12px] text-[#696161]">Aug 2022 - Present</p>

      <ul className="text-[#1F1D1D]">
        <li className="text-[14.5px] mt-[5px] mb-[5px]">
          - Interactivity Implementation
        </li>
        <li className="text-[14.5px] mt-[5px] mb-[5px]">
          - Interactivity Implementation
        </li>
        <li className="text-[14.5px] mt-[5px] mb-[5px]">
          - Interactivity Implementation
        </li>
      </ul>
      <AddSection top="top-5" right="right-5" />

      {children}
    </div>
  );
}
