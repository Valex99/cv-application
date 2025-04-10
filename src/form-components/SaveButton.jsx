export default function SaveButton({ disabled }) {
  return (
    <div>
      <button
        type="submit"
        disabled={disabled}
        className="bg-[#0D766E] active:scale-95 text-white p-2 rounded cursor-pointer w-[100%] hover:bg-[#0A5F5A] active:bg-[#094F4C]"
      >
        Save
      </button>
    </div>
  );
}
