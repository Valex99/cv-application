import EditWorkSchool from "../edit-add-icons/EditWorkSchool";

export default function Work({ workDetails, children }) {
  return (
    // ADD KEYS TO LIST OF ITEMS!
    <div>
      <h1 className="relative text-[19px] font-bold leading-tight">
        {workDetails.title}
        <EditWorkSchool />
      </h1>
      <p className="text-[16px]"> {workDetails.employeer}</p>
      <p className="text-[12px] text-[#696161]">
        {" "}
        {workDetails.startDate} - {workDetails.endDate}
      </p>

      <ul className="text-[#1F1D1D]">
        <li className="text-[14.5px] mt-[5px] mb-[5px]">
          {workDetails.responsibilities[0]}
        </li>
        <li className="text-[14.5px] mt-[5px] mb-[5px]">
          {workDetails.responsibilities[1]}
        </li>
        <li className="text-[14.5px] mt-[5px] mb-[5px]">
          {workDetails.responsibilities[2]}
        </li>
      </ul>

      {children}
    </div>
    // Children should be Edit Workplace button
  );
}
