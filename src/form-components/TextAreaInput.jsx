export default function TextArea({ id, label, value, height, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        // Innstead of: className={`min-h-[${height}px]`} use: style={{ minHeight: `${height}px` }}
        className={`w-full p-2 border border-gray-300 rounded`}
        style={{ minHeight: `${height}px` }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
