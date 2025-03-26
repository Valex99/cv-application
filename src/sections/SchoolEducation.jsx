import { useState } from "react";
import AddSection from "../event-listeners/AddSection";
import { BsPen } from "react-icons/bs";
import EducationForm from "../forms/EducationForm";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";


export default function SchoolEducation() {
  const [allSchoolEducation, setAllSchoolEducation] = useLocalStorage("schoolEducation",[
    // Default value when page is first rendered
    {
      id: uuidv4(),
      title: "Computer Science and Engineering",
      school: "Massachusetts Institute of Technology",
      startDate: { month: "October", year: "2017" },
      endDate: { month: "July", year: "2020" },
    },
  ]);

  const [editingEducation, setEditingEducation] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddSchool = () => {
    setEditingEducation(null);
    setIsFormOpen(true);
  };

  const handleEditEducation = (education) => {
    setEditingEducation(education);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingEducation(null);
  };

  return (
    <div className="group text-black p-5 relative">
      <h2 className="text-[32px] mb-[20px] leading-tight">School Education</h2>
      <AddSection top="top-3" right="right-5" onClick={handleAddSchool} />

      {/* Render School Education List */}
      {allSchoolEducation.length > 0 ? (
        allSchoolEducation.map((education) => (
          <div key={education.id} className="mt-6">
            <h3 className="relative text-[19px] font-bold leading-tight">
              {education.title}

              <div
                className="cursor-pointer absolute -top-1 right-0 opacity-0 group-hover:opacity-100 h-[45px] w-[45px] rounded-full flex items-center justify-center 
                  transition-all duration-300 active:scale-95 transition-shadow hover:shadow-[0_3px_4px_#00000024,0_3px_3px_-2px_#0000001f,0_1px_8px_#0003] p-2"
                onClick={() => handleEditEducation(education)}
              >
                <BsPen className="text-black text-lg cursor-pointer" />
              </div>
            </h3>
            <p className="text-[16px]">{education.school}</p>
            <p className="text-[12px] text-[#696161]">
              {education.startDate.month} {education.startDate.year} -{" "}
              {education.endDate.month && education.endDate.year
                ? `${" " + education.endDate.month} ${education.endDate.year}`
                : " Present"}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No school education added yet.</p>
      )}

      {/* leverage isFormOpen to call EducationForm Component */}
      {isFormOpen && (
        <EducationForm
          onClose={handleCloseForm}
          allSchoolEducation={allSchoolEducation}
          setAllSchoolEducation={setAllSchoolEducation}
          editingEducation={editingEducation}
        />
      )}
    </div>
  );
}
