import Experience from "../components/Experience";

import { BsPen } from "react-icons/bs";

export default function RenderExperience({ experience, onClick }) {
  const tasks = experience.responsibilities
    .split(",")
    .map((task) => task.trim())
    .filter((task) => task !== ""); // Remove empty values

  const hasEnded =
    experience.endDate.month === "" || experience.endDate.month === ""
      ? "Present"
      : `${experience.endDate.month} ${experience.endDate.year}`;

  return (
    <div key={experience.id} className="mt-6">
      <h1 className="relative text-[19px] font-bold leading-tight">
        {experience.title}

        <div
          className="absolute -top-1 right-0 opacity-0 group-hover:opacity-100 h-[45px] w-[45px] rounded-full flex items-center justify-center 
                  shadow-[0px_8px_24px_4px_rgba(0,0,0,0.6)]  
                  transition-all duration-300"
          onClick={onClick}
        >
          <BsPen className="text-black text-lg cursor-pointer" />
        </div>
      </h1>
      <p className="text-[16px]">{experience.employeer}</p>
      <p className="text-[12px] text-[#696161]">
        {experience.startDate.month} {experience.startDate.year} - {hasEnded}
      </p>

      <ul className="text-[#1F1D1D]">
        {tasks.map((task, index) => (
          <li key={index} className="text-[14.5px] mt-[5px] mb-[5px]">
            - {task}
          </li>
        ))}
      </ul>

      {/* <p className="text-[#1F1D1D]">{experience.responsibilities}</p> */}
    </div>
  );
}
