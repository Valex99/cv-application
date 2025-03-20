import gustavoPic from "../images/gustavo.jpg";

export default function ProfilePicture() {
  return (
    <div className="absolute left-10 -bottom-10 w-[120px] h-[150px] rounded-full overflow-hidden border-4 border-white flex items-center shadow-lg">
      <img
        src={gustavoPic}
        alt="Profile picture"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
