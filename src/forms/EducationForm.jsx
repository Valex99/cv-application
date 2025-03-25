import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsX } from "react-icons/bs";

// Import form components
import TextInput from "../form-components/TextInput";
import SaveButton from "../form-components/SaveButton";

export default function EducationForm({
  onClose,
  allSchoolEducation,
  setAllSchoolEducation,
  editingEducation,
}) {
  const [temporaryValue, setTemporaryValue] = useState(
    // If editing education is true -> user is editin existing education (already an object)
    // If not, crete a new object with unique id
    editingEducation || {
      id: uuidv4(),
      title: "",
      school: "",
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // On submit, check if user was adding new education or editing an existing one
    if (editingEducation) {
      const updatedEducation = allSchoolEducation.map((education) =>
        education.id === temporaryValue.id ? temporaryValue : education
      );
      setAllSchoolEducation(updatedEducation);
    } else {
      setAllSchoolEducation([...allSchoolEducation, temporaryValue]);
    }
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
            {editingEducation
              ? "Edit School Education"
              : "Add School Education"}
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
            label="Title"
            value={temporaryValue.title}
            onChange={(e) =>
              setTemporaryValue((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />

          <TextInput
            id="school"
            label="School"
            value={temporaryValue.school}
            onChange={(e) =>
              setTemporaryValue((prev) => ({
                ...prev,
                school: e.target.value,
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

          {/* Delete button should only appear if the user is editing existing experience */}
          {editingEducation && (
            <button
              type="button"
              className="w-[100%] cursor-pointer text-[#991B1B] bg-white mt-3 hover:bg-gray-200 active:scale-95 transition-all px-4 py-2 rounded-md"
            >
              Delete
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
