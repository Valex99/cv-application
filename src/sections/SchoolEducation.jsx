import AddSection from "../event-listeners/AddSection";
import AddEducationForm from "../forms/EducationForm";

export default function SchoolEducation({ children }) {
  return (
    <div className="group text-black p-5 relative">
      <h2 className="text-[32px] mb-[20px] leading-tight">School Education</h2>
      <h1 className="text-[19px] font-bold leading-tight">
        Computer Science and Engineering
      </h1>
      <p className="text-[16px]">Massachusetts Institute of Technology</p>
      <p className="text-[12px] text-[#696161]">Feb 2020 - Mar 2023</p>
      <AddSection top="top-5" right="right-5" />
      {children}

      {/* {educationForm && <AddEducationForm onClose={toggleEducationForm} />} */}
    </div>
  );
}
