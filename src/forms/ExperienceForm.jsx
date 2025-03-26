import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsX } from "react-icons/bs";

// Import form components
import TextInput from "../form-components/TextInput";
import TextArea from "../form-components/TextAreaInput";
import SaveButton from "../form-components/SaveButton";

export default function ExperienceForm({
  onClose,
  allWorkExperience,
  setAllWorkExperience,
  editingExperience,
}) {
  const [temporaryValue, setTemporaryValue] = useState(
    // "If existingExperience is true (if it has a true value) use it as a state otherwise use empty object"
    editingExperience || {
      id: uuidv4(),
      title: "",
      employer: "",
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
      tasks: "",
    }
  );

  // Error handling
  const [errors, setErrors] = useState({});

  // No need for handleChange function because i am using setState function on form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {};
    Object.keys(temporaryValue).forEach((key) => {
      // Validate startDate fields (month and year)
      if (key === "startDate") {
        if (
          !temporaryValue.startDate.month.trim() ||
          !temporaryValue.startDate.year.trim()
        ) {
          newErrors.startDate = "Start date (month and year) is required";
        }
      }

      // Skip endDate validation (can be empty)
      if (key === "endDate") {
        return;
      }

      // Only apply trim to strings
      if (
        typeof temporaryValue[key] === "string" &&
        temporaryValue[key].trim() === ""
      ) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    // If there are errors, dont proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const tasksToArray = temporaryValue.tasks
      .split(",")
      .map((task) => task.trim()) // Trim extra spaces
      .filter((task) => task !== ""); // Remove empty tasks

    // Now this holds all values that temporaryValue state held (Object)
    // WITH A DIFFERENCE OF tasks -> tasks are updated therefore
    const updatedTasksObject = {
      ...temporaryValue,
      tasks: tasksToArray,
    };

    // Check if user is editing existing experience or addig new
    // if editing expereince it truthy, user is editing an existing experience
    if (editingExperience) {
      // Find experience that user edited
      // allWorkExperience.map(...) -> creates a new array based on alWorkExperience
      // but it doesnt modify the original array so the updatedExperience holds that new array
      const updatedExperience = allWorkExperience.map((exp) =>
        exp.id === temporaryValue.id ? updatedTasksObject : exp
      );

      // Update the state with the modified array
      // const updatedExperience now holds a new array of work experiences,
      // where one specific experience (the one you are editing) is updated
      // with the new data
      setAllWorkExperience(updatedExperience);
    } else {
      // If not, add new Work experience into an array
      setAllWorkExperience([...allWorkExperience, updatedTasksObject]);
    }
    // Close the form
    onClose();
  };

  const handleDelete = (id) => {
    // When the user clicks delete (since delete button is only shown when user is editing an existing prject
    // we dont need to check for that agian)

    // 1. The work experience that user is editing should be removed from the all work exp array
    setAllWorkExperience((prevExperiences) =>
      prevExperiences.filter((experience) => experience.id !== id)
    );

    // 2. Form should close
    onClose();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTemporaryValue((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error message for this field when the user starts typing
    if (errors[id]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-gray-700/40 backdrop-blur-sm z-10"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg max-w-[400px] w-[400px] m-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {editingExperience ? "Edit Work Experience" : "Add Work Experience"}
          </h2>
          {/* Close Button (X) */}
          <div
            onClick={onClose}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-gray-300 active:bg-gray-400 text-white cursor-pointer"
          >
            <BsX className="text-black h-8 w-8" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="title"
            label="Job Title"
            type="text"
            value={temporaryValue.title}
            onChange={handleChange}
            error={errors.title}
          />

          <TextInput
            id="employer"
            label="Employer"
            type="text"
            value={temporaryValue.employer}
            onChange={handleChange}
            error={errors.employer}
          />

          <TextArea
            id="tasks"
            label="Tasks - separated by commas (,)"
            value={temporaryValue.tasks}
            height="100"
            onChange={handleChange}
            error={errors.tasks}
          />

          {/* Start Date */}
          <div className="mb-4">
            <label className="block mb-1">Start Date</label>
            <div className="flex gap-4">
              {/* Month Selector */}
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={temporaryValue.startDate?.month || ""}
                onChange={(e) =>
                  // To update Nested Properties (object inside object)
                  setTemporaryValue((prev) => ({
                    ...prev,
                    startDate: { ...prev.startDate, month: e.target.value },
                  }))
                }
              >
                <option value="">Select Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              {/* Year Selector */}
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                min="1950"
                max="2100"
                step="1"
                value={temporaryValue.startDate?.year || ""}
                onChange={(e) =>
                  setTemporaryValue((prev) => ({
                    ...prev,
                    startDate: { ...prev.startDate, year: e.target.value },
                  }))
                }
              />
            </div>
            {/* Error Message for Start Date */}
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">End Date</label>
            <div className="flex gap-4">
              {/* Month Selector */}
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={temporaryValue.endDate?.month || ""}
                onChange={(e) =>
                  setTemporaryValue((prev) => ({
                    ...prev,
                    endDate: { ...prev.endDate, month: e.target.value },
                  }))
                }
              >
                <option value="">Select Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              {/* Year Selector */}
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                min="1950"
                max="2100"
                step="1"
                value={temporaryValue.endDate?.year || ""}
                onChange={(e) =>
                  setTemporaryValue((prev) => ({
                    ...prev,
                    endDate: { ...prev.endDate, year: e.target.value },
                  }))
                }
              />
            </div>
          </div>

          {/* Buttons */}
          <SaveButton />

          {/* Delete button should only appear if the user is editing existing experience */}
          {editingExperience && (
            <button
              type="button"
              className="w-[100%] cursor-pointer text-[#991B1B] bg-white mt-3 hover:bg-gray-200 active:scale-95 transition-all px-4 py-2 rounded-md"
              // Since handleDelete take id as an argument, on click of delete button a function
              // should be called which passes current editing experience id as an argument
              onClick={() => handleDelete(temporaryValue.id)}
            >
              Delete
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
