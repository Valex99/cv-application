import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

const Main = ({ children }) => {
  return (
    <div className="w-[800px] bg-white rounded-lg shadow-lg overflow-hidden relative">
      <Header />
      <About />
      <Experience />
      <Education />
      {children}
    </div>
  );
};

export default Main;
