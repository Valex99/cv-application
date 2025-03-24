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
    // "If exitinfExperience is true (if it has a true value) use it as a state otherwise use empty object"
    editingExperience || {
      id: uuidv4(),
      title: "",
      employer: "",
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
      tasks: "",
    }
  );

  // No need for handleChange function because i am using setState function on form
  const handleSubmit = (e) => {
    e.preventDefault();

    // ADDED //
    // Convert tasks string into an array before saving
    const tasksToArray = temporaryValue.tasks
      .split(",")
      .map((task) => task.trim()) // Trim extra spaces
      .filter((task) => task !== ""); // Remove empty tasks


      // Now this holds all values that temporaryValue state held (Object)
      // WITH A DIFFERENCE OF tasks -> tasks are updated therefore
    const updatedTasksObject = {
        ...temporaryValue,
        tasks: tasksToArray
    }



    // Check if user is editing existing experience or addig new
    // if editing expereince it truthy, user is editing an existing experience
    if (editingExperience) {
      // Find experience that user edited
      const ExpToUpdate = allWorkExperience.map((exp) =>
        exp.id === temporaryValue.id ? updatedTasksObject : exp
      );
    } else {
      setAllWorkExperience([...allWorkExperience, updatedTasksObject]);
    }
    // Close the form
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-gray-700/40 backdrop-blur-sm z-10"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg w-[400px]"
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
            value={temporaryValue.title}
            onChange={(e) =>
              setTemporaryValue((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />

          <TextInput
            id="employer"
            label="Employer"
            value={temporaryValue.employeer}
            onChange={(e) =>
              setTemporaryValue((prev) => ({
                ...prev,
                employer: e.target.value,
              }))
            }
          />

          <TextArea
            id="responsibilities"
            label="Description"
            value={temporaryValue.tasks}
            height="100"
            onChange={(e) =>
              setTemporaryValue((prev) => ({
                ...prev,
                tasks: e.target.value,
              }))
            }
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
        </form>
      </div>
    </div>
  );
}
