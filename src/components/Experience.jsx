import { useState } from "react";

import AddSection from "../edit-add-icons/AddSection";
import AddExperienceForm from "../forms/AddExperienceForm";

import RenderExperience from "./RenderExperience";

// On click of the plus icon, a new form should appear

export default function Experience({ children }) {
  const [experienceForm, setExperienceForm] = useState(false);
  const [allExperienceArray, setAllExperienceArray] = useState([
    {
      title: "Web Developer",
      employeer: "Microsoft",
      startDate: { month: "January", year: "2010" },
      endDate: { month: "August", year: "2015" },
      responsibilities:
        "Interactivity Implementation, Web and Mobile UI/UX Design, Team Collaboration and Organization",
    },
  ]);

  const toggleExperienceForm = () => {
    setExperienceForm(!experienceForm);
  };

  // If allExperienceArray is defined like this it is reset on every render
  // const allExperienceArray = [];

  return (
    <div className="group text-black p-5 relative">
      <h2 className="text-[32px] mb-[20px] leading-tight">Experience</h2>
      <AddSection top="top-3" right="right-5" onClick={toggleExperienceForm} />

      {/* Function for rendering each experience called */}

      {allExperienceArray.map((experience, index) => (
        <RenderExperience experience={experience} key={index} />
      ))}

      {children}

      {/* PASS allExperienceArray and setter function */}
      {experienceForm && (
        <AddExperienceForm
          allExperienceArray={allExperienceArray}
          setAllExperienceArray={setAllExperienceArray}
          onClose={toggleExperienceForm}
        />
      )}
    </div>
  );
}
