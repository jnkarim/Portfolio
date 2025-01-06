import { FaCode } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAssemblyscript } from "react-icons/si";
import { FaNodeJs, FaReact, FaLaravel } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div className="pb-16 px-8 my-24 text-white">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-gray-300">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Languages Section */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex justify-center items-center mb-6">
            <FaCode className="text-yellow-500 text-3xl" />
            <p className="text-xl font-semibold ml-2">Languages</p>
          </div>
          <div className="flex justify-center gap-6">
            <TbBrandCpp className="text-blue-500 text-4xl" />
            <IoLogoJavascript className="text-yellow-500 text-4xl" />
            <SiAssemblyscript className="text-gray-400 text-4xl" />
          </div>
        </div>

        {/* Frontend Section */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex justify-center items-center mb-6">
            <FaCode className="text-red-500 text-3xl" />
            <p className="text-xl font-semibold ml-2">Frontend</p>
          </div>
          <div className="flex justify-center gap-6">
            <FaReact className="text-blue-500 text-4xl" />
          </div>
        </div>

        {/* Backend Section */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex justify-center items-center mb-6">
            <FaCode className="text-orange-500 text-3xl" />
            <p className="text-xl font-semibold ml-2">Backend</p>
          </div>
          <div className="flex justify-center gap-6">
            <FaNodeJs className="text-green-500 text-4xl" />
            <FaLaravel className="text-yellow-500 text-4xl" />
          </div>
        </div>

        {/* Database Section */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex justify-center items-center mb-6">
            <FaCode className="text-green-500 text-3xl" />
            <p className="text-xl font-semibold ml-2">Database</p>
          </div>
          <div className="flex justify-center gap-6">
            <DiMongodb className="text-green-500 text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
