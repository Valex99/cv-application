import { useState } from "react";
import { BsX } from "react-icons/bs";
import SaveButton from "../form-components/SaveButton";
import TextArea from "../form-components/TextAreaInput";

export default function EditAboutForm({
  aboutDescription,
  setAboutDescription,
  onClose,
}) {
  // Temporary state
  const [textareaValue, setTextareaValue] = useState(aboutDescription);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate textarea (checking if it's empty or too short)
    const newErrors = {};

    if (textareaValue.trim() === "") {
      newErrors.description = "Description is required";
    }

    // Special validation for About section (must be at least 5 chars)
    if (textareaValue.trim().length < 5) {
      newErrors.description = "Bio must be at least 5 characters";
    }

    // If there are errors, don't proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed
    setAboutDescription(textareaValue);
    onClose();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTextareaValue(value);

    // Clear error message
    setErrors((prevErrors) => ({
      ...prevErrors,
      description: "", // Clear the specific error for the description
    }));
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

        {/* Form already has onSubmit evenet handler set, and save button is of type "submit" */}
        <form onSubmit={handleSubmit}>
          <TextArea
            id="description"
            label="Description"
            value={textareaValue}
            height="300"
            onChange={handleChange}
            error={errors.description}
          />
          <SaveButton />
        </form>
      </div>
    </div>
  );
}
