import EditWorkSchool from "../edit-add-icons/EditWorkSchool";
import Experience from "./Experience";

export default function RenderExperience({ experience }) {
  const tasks = experience.responsibilities
    .split(",")
    .map((task) => task.trim())
    .filter((task) => task !== ""); // Remove empty values

  return (
    <div className="mt-6">
      <h1 className="relative text-[19px] font-bold leading-tight">
        {experience.title}
        <EditWorkSchool />
      </h1>
      <p className="text-[16px]">{experience.employeer}</p>
      <p className="text-[12px] text-[#696161]">
        {experience.startDate.month} {experience.startDate.year} -{" "}
        {experience.endDate.month} {experience.endDate.year}
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
