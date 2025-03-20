import { useState } from "react";

import { BsChatLeftDots, BsPhone, BsPinMap } from "react-icons/bs";
import ProfilePicture from "./ProfilePicture";
import EditSection from "./EditSection";

import EdtHeaderForm from "./EditHeaderForm";

export default function Header({ children }) {
  {
    /* headerForm is the state that determines whether the form should be visible or not */
  }
  const [headerForm, setHeaderForm] = useState(false);

  {
    /* toggleForm is the function that toggles the visibility of the form when the edit icon is clicked */
  }
  const toggleForm = () => {
    setHeaderForm(!headerForm);
  };

  return (
    <div className="group relative flex items-center justify-end p-5 pt-7 bg-[#0D766E]">
      {/* Profile Picture on the left side */}
      <ProfilePicture />

      {/* Edit Section Icon - Add event listener so on click a function is triggered */}
      <EditSection top="top-4" right="right-5" onClick={toggleForm} />

      {/* Text content aligned to the right */}
      <div className="text-left text-white mr-12">
        <h1 className="text-[24px] font-bold leading-tight">Matej Valencic</h1>
        <h2 className="text-[16px] font-medium ">Front-End Engineer</h2>

        <p className="text-sm mt-[15px] mb-[15px]">
          <BsChatLeftDots className="inline-block mr-2 text-lg" />
          mail: mval.fx@gmail.com
        </p>

        <p className="text-sm mt-[15px] mb-[15px]">
          <BsPhone className="inline-block mr-2 text-lg" />
          +38670710818
        </p>

        <p className="text-sm mt-[15px] mb-[15px]">
          <BsPinMap className="inline-block mr-2 text-lg" />
          Postojna, Slovenia
        </p>
      </div>
      {children}

      {/* If / When headerForm is true, we render the EditForm component */}
      {headerForm && <EdtHeaderForm onClose={toggleForm} />}
    </div>
  );
}
