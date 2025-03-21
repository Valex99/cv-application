import { useState } from "react";
import { BsX } from "react-icons/bs";

export default function EditHeaderForm({ userInfo, setUserInfo, onClose }) {
  // Temporary state - updated onChange
  const [formValues, setFormValues] = useState(userInfo);
  const [imagePreview, setImagePreview] = useState(userInfo.photo || ""); // To show the preview of the selected image

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(formValues);
    onClose(); // Close the form after submitting
  };

  //
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setFormValues((prevUserInfo) => ({
          ...prevUserInfo,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  //

  // Rather than on change, the data should change on submit
  // On change, only input window should update
  // But form text should change only if the user clicks save
  // If now save is clicked -> form values holds the latest state

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
          <h2 className="text-2xl font-bold">About</h2>
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
            <label className="block mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={formValues.name}
              onChange={(e) =>
                setFormValues((prevUserInfo) => ({
                  ...prevUserInfo,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="title">
              Job Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={formValues.title}
              onChange={(e) =>
                setFormValues((prevUserInfo) => ({
                  ...prevUserInfo,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={formValues.email}
              onChange={(e) =>
                setFormValues((prevUserInfo) => ({
                  ...prevUserInfo,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              value={formValues.phone}
              onChange={(e) =>
                setFormValues((prevUserInfo) => ({
                  ...prevUserInfo,
                  phone: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={formValues.location}
              onChange={(e) =>
                setFormValues((prevUserInfo) => ({
                  ...prevUserInfo,
                  location: e.target.value,
                }))
              }
            />
          </div>

          {/* Image Upload Section */}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="photo">
              Profile Photo
            </label>

            {/* Image Preview or Placeholder */}
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-2 border-gray-300 shadow-sm"
              />
            ) : (
              <div className="w-24 h-24 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center shadow-sm">
                <span className="text-gray-500 text-xs">No Image</span>
              </div>
            )}

            {/* File Input Section */}
            <div className="flex items-center justify-start mt-2">
              {/* Choose File Button */}
              <input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file:bg-gray-400 hover:file:bg-gray-500 block text-sm text-gray-700 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:text-white file:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D766E] focus:ring-opacity-50 cursor-pointer"
              />
              {/* File Name Text */}
              {!imagePreview && (
                <span className="ml-2 text-sm text-gray-500">
                  No File Chosen
                </span>
              )}
            </div>
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
