import { useState } from "react";

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
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-700/40 backdrop-blur-sm z-10">
      <div className="bg-white p-8 rounded-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
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
            <label className="block mb-1" htmlFor="photo">
              Profile Photo
            </label>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover border"
              />
            ) : (
              <div className="w-24 h-24 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block mx-auto text-sm"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white p-2 rounded cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#0D766E] text-white p-2 rounded cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
