import Header from "./sections/Header";
import About from "./sections/About";
import WorkExperience from "./sections/WorkExperience";
import SchoolEducation from "./sections/SchoolEducation";

const EntryPoint = ({ children }) => {
  return (
    <div className="w-[800px] bg-white rounded-lg shadow-lg overflow-hidden relative">
      <Header />
      <About />
      <WorkExperience />
      <SchoolEducation />
      {children}
    </div>
  );
};

export default EntryPoint;
