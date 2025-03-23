import { useState } from "react";
import { BsX } from "react-icons/bs";

import TextInput from "../form-components/TextInput";
import SaveButton from "../form-components/SaveButton";

export default function AddEducationForm({ onClose }) {
  const schoolDetails = {
    title: "i",
    issuer: "i",
    startDate: { month: "January", year: "2010" },
    endDate: { month: "August", year: "2015" },
  };

  const [school, setSchool] = useState(schoolDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h2 className="text-2xl font-bold">Work</h2>
          {/* Close Button (X) */}
          <div
            onClick={onClose}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-gray-300 active:bg-gray-400 text-white cursor-pointer"
          >
            <BsX className="text-black h-8 w-8" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {/* ADD INPUT FIELDS */}
          <TextInput
            id="title"
            label="Education Title"
            value={null}
            onChange={(e) =>
              setSchool((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />

          <TextInput
            id="issuer"
            label="Issuer"
            value={null}
            onChange={(e) =>
              setSchool((prev) => ({
                ...prev,
                issuer: e.target.value,
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
                value={school.startDate?.month || ""}
                onChange={(e) =>
                  // To update Nested Properties (object inside object)
                  setSchool((prev) => ({
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
                value={school.startDate?.year || ""}
                onChange={(e) =>
                  setSchool((prev) => ({
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
                value={school.endDate?.month || ""}
                onChange={(e) =>
                  setSchool((prev) => ({
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
                value={school.endDate?.year || ""}
                onChange={(e) =>
                  setSchool((prev) => ({
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
