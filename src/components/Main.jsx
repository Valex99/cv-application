import Header from "./Header";
import About from "./About";
import ProfilePicture from "./ProfilePicture";

const Main = ({ children }) => {
  return (
    <div className="w-[800px] bg-white rounded-lg shadow-lg overflow-hidden relative">
      <Header />
      <About />
      {children}
    </div>
  );
};

export default Main;
