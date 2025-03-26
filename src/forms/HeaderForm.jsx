import { useState } from "react";
import { BsX } from "react-icons/bs";
import TextInput from "../form-components/TextInput";
import SaveButton from "../form-components/SaveButton";

export default function EditHeaderForm({ userInfo, setUserInfo, onClose }) {
  // Temporary state - updated onChange
  const [formValues, setFormValues] = useState(userInfo);
  const [imagePreview, setImagePreview] = useState(userInfo.photo || ""); // To show the preview of the selected image
  const [errors, setErrors] = useState({}); // Track validation errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (formValues[key].trim() === "") {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    // If there are errors, don't proceed
    if (Object.keys(newErrors).length > 0) {
      //console.log("Errors:", newErrors);
      setErrors(newErrors);
      return;
    }

    setUserInfo(formValues);
    onClose(); // Close the form after submitting
  };

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
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
          <TextInput
            id="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            error={errors.name}
          />

          <TextInput
            id="title"
            label="Job Title"
            type="text"
            value={formValues.title}
            onChange={handleChange}
            error={errors.title}
          />

          <TextInput
            id="email"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
          />

          <TextInput
            id="phone"
            label="Phone"
            type="tel"
            value={formValues.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          <TextInput
            id="location"
            label="Location"
            value={formValues.location}
            onChange={handleChange}
            error={errors.location}
          />

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

          <SaveButton />
        </form>
      </div>
    </div>
  );
}
