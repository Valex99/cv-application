import { useState } from "react";

import AddSection from "../edit-add-icons/AddSection";
import Work from "./Work";
import AddExperienceForm from "../forms/AddExperience";

// On click of the plus icon, a new form should appear

export default function Experience({ children }) {
  const [experienceForm, setExperienceForm] = useState(false);

  const toggleExperienceForm = () => {
    setExperienceForm(!experienceForm);
  };

  const workDetails = {
    title: "Web Developer",
    employeer: "Microsoft",
    startDate: "17.9.2020",
    endDate: "19.1.2024",
    responsibilities: [
      "Interactivity Implementation",
      "Web and Mobile UI/UX Design",
      "Team Collaboration and Organization",
    ],
  };

  return (
    <div className="group text-black p-5 relative">
      <h2 className="text-[32px] mb-[20px] leading-tight">Experience</h2>
      <AddSection top="top-3" right="right-5" onClick={toggleExperienceForm} />

      <Work workDetails={workDetails} children={children} />

      {children}
      {experienceForm && <AddExperienceForm 
        onClose={toggleExperienceForm}
      />}
    </div>
  );
}
