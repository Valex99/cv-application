//import { useState } from "react";
import EditSection from "../event-listeners/EditSection";
import EditAboutForm from "../forms/AboutForm";
import useLocalStorage from "../hooks/useLocalStorage";

export default function About({ children }) {
  // Toggle form visibility
  const [aboutForm, setAboutForm] = useLocalStorage("aboutForm", false);

  // Persist about description in local storage
  const [aboutDescription, setAboutDescription] = useLocalStorage(
    "aboutDescription",
    "I'm a passionate front-end developer with a knack for bringing beautiful and functional web experiences to life. Combining my technical expertise with an eye for design, I weave code into interactive tapestries that captivate users and drive results."
  );

  const toggleAboutForm = () => {
    setAboutForm(!aboutForm);
  };

  return (
    <div className="group relative text-black mt-[50px] p-5">
      <h2 className="text-[32px] mb-[20px] mt-[15px] leading-tight">About</h2>
      <p className="text-[16x] mb-[15px] mb-[15px] text-[#1F1D1D] pr-[60px] break-words">
        {aboutDescription}
      </p>
      <EditSection top="top-7" right="right-5" onClick={toggleAboutForm} />
      {children}

      {/* Pass down aboutDescription state and state setter function + event listener */}
      {aboutForm && (
        <EditAboutForm
          aboutDescription={aboutDescription}
          setAboutDescription={setAboutDescription}
          onClose={toggleAboutForm}
        />
      )}
    </div>
  );
}
