import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import AddSection from "../event-listeners/AddSection";
import { BsPen } from "react-icons/bs";
import ExperienceForm from "../forms/ExperienceForm";
import { v4 as uuidv4 } from "uuid";

export default function WorkExperience() {
  // Persist all work experience in local storage
  const [allWorkExperience, setAllWorkExperience] = useLocalStorage(
    "workExperience",
    [
      {
        id: uuidv4(),
        title: "Front-End Engineer",
        employer: "Google",
        startDate: { month: "August", year: "2022" },
        endDate: { month: "", year: "" },
        tasks: [
          "Interactivity Implementation",
          "Web and Mobile UI/UX Design",
          "Team Collaboration and Organization",
        ],
      },
    ]
  );
  const [editingExperience, setEditingExperience] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to add new work experience
  const handleAddExperience = () => {
    setEditingExperience(null); // No existing data when adding
    setIsFormOpen(true);
  };

  // Function to edit an existing work experience
  const handleEditExperience = (experience) => {
    // Ensure tasks is always a string before passin an object to be edited inside a state.
    const normalizedExperience = {
      ...experience,
      tasks: Array.isArray(experience.tasks)
        ? experience.tasks.join(", ")
        : experience.tasks || "",
    };

    setEditingExperience(normalizedExperience); // Pass on an existing object
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingExperience(null);
  };

  return (
    <div className="group text-black p-5 relative">
      <h2 className="text-[32px] mb-[20px] leading-tight">Work Experience</h2>
      <AddSection top="top-3" right="right-5" onClick={handleAddExperience} />

      {/* Render Work Experience List */}
      {allWorkExperience.length > 0 ? (
        allWorkExperience.map((experience) => (
          <div key={experience.id} className="mt-6">
            <h3 className="relative text-[19px] font-bold leading-tight">
              {experience.title}
              <div
                className="cursor-pointer absolute -top-1 right-0 opacity-0 group-hover:opacity-100 h-[45px] w-[45px] rounded-full flex items-center justify-center 
                  transition-all duration-300 active:scale-95 transition-shadow hover:shadow-[0_3px_4px_#00000024,0_3px_3px_-2px_#0000001f,0_1px_8px_#0003] p-2"
                onClick={() => handleEditExperience(experience)}
              >
                <BsPen className="text-black text-lg cursor-pointer" />
              </div>
            </h3>

            <p className="text-[16px]">{experience.employer}</p>
            <p className="text-[12px] text-[#696161]">
              {experience.startDate.month} {experience.startDate.year} -
              {experience.endDate.month && experience.endDate.year
                ? `${" " + experience.endDate.month} ${experience.endDate.year}`
                : " Present"}
            </p>

            {/* THIS WAS EDITED SO IT DISPLAYS TASK BY TASK */}
            <ul className="text-sm break-words text-[#1F1D1D]">
              {experience.tasks.map((task, index) => (
                <li key={index} className="text-[14.5px] mt-[5px] mb-[5px]">
                  - {task}
                </li>
              ))}
            </ul>
            {/* TILL HERE */}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No work experience added yet.</p>
      )}

      {isFormOpen && (
        <ExperienceForm
          onClose={handleCloseForm}
          allWorkExperience={allWorkExperience}
          setAllWorkExperience={setAllWorkExperience}
          editingExperience={editingExperience}
        />
      )}

      {/* Props to pass from WorkExperience to Experience form
          1. onClose (function) -> to close the form once the user is done
          2. allWorkExperience (array) -> current array of all working experience
          3. setAllWorkExperience (function) -> to update the array when new experience is added / edited
          4. editing experience (Object or null) -> if adding experience pass null, else pass editing Object
      */}
    </div>
  );
}
