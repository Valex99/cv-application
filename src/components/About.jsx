import EditSection from "./EditSection";

export default function About({ children }) {
  return (
    <div className="group relative text-black mt-[50px] p-5">
      <h2 className="text-[32px] mb-[20px] mt-[15px] leading-tight">About</h2>
      <p className="text-[16x] mb-[15px] mb-[15px] text-[#1F1D1D] pr-[60px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <EditSection top="top-7" right="right-5" />
      { children }
    </div>
  );
}
