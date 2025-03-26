export default function TextArea({
  id,
  label,
  value,
  height,
  onChange,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-1" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        // Innstead of: className={`min-h-[${height}px]`} use: style={{ minHeight: `${height}px` }}

        // className={`w-full p-2 border border-gray-300 rounded`}
        style={{ minHeight: `${height}px` }}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      />
      {/* ERROR MESSAGE */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
