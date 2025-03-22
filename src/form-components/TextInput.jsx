export default function TextInput({ id, label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
