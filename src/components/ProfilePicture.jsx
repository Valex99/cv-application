export default function ProfilePicture({ photoSrc }) {
  return (
    <div className="absolute left-10 -bottom-10 w-[120px] h-[150px] rounded-full overflow-hidden border-4 border-white flex items-center shadow-lg">
      <img
        src={photoSrc}
        alt="Profile picture"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
