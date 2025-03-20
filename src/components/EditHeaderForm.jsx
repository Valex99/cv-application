import { useState } from "react";

export default function EditHeaderForm({ onClose }) {
  const [name, setName] = useState("Matej Valencic");
  const [title, setTitle] = useState("Front-End Engineer");
  const [email, setEmail] = useState("mval.fx@gmail.com");
  const [phone, setPhone] = useState("+38670710818");
  const [location, setLocation] = useState("Postojna, Slovenia");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { name, title, email, phone, location });
    onClose(); // Close the form after submitting
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-700/40 backdrop-blur-sm z-10">
      <div className="bg-white p-8 rounded-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white p-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="bg-[#0D766E] text-white p-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
