export default function ProfilePicture({ photoSrc }) {
  return (
    <div className="profile-img absolute left-5 -bottom-10 w-[130px] h-[160px] rounded-full overflow-hidden border-4 border-white flex items-center shadow-lg">
      <img
        src={photoSrc}
        alt="Profile picture"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
