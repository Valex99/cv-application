import { useState } from "react";
import { BsX } from "react-icons/bs";

export default function EditAboutForm({
  aboutDescription,
  setAboutDescription,
  onClose,
}) {
  // Temporary state
  const [textareaValue, setTextareaValue] = useState(aboutDescription);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAboutDescription(textareaValue);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-gray-700/40 backdrop-blur-sm z-10"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
       <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          {/* Close Button (X) */}
          <div
            onClick={onClose}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-gray-300 active:bg-gray-400 text-white cursor-pointer"
          >
            <BsX className="text-black h-8 w-8" />
          </div>
        </div>

        {/* Form already has onSubmit venet handler set, and save button is of type "submit" */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded min-h-[300px]"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#0D766E] text-white p-2 rounded cursor-pointer w-[100%] hover:bg-[#0A5F5A] active:bg-[#094F4C]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
