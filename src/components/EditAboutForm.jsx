import { useState } from "react";

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
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-700/40 backdrop-blur-sm z-10">
      <div className="bg-white p-8 rounded-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-4">About</h2>
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
              type="button"
              className="bg-gray-400 text-white p-2 rounded cursor-pointer w-[70px]"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#0D766E] text-white p-2 rounded cursor-pointer w-[70px]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
