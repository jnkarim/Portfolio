import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="pb-16 text-gray-300 my-24">
      <h2 className="text-4xl font-bold text-center">Project Showcase</h2>

      <div className="bg-gray-800 rounded-lg shadow-2x my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*Project 1 */}
          <div className="flex flex-col px-8 py-8">
            <img
              className="rounded-lg w-full h-80 mb-4"
              src={project1}
              alt="project 1"
            />
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold my-auto">CPTracker</h3>
              <a
                href="https://github.com/jnkarim/CPTracker"
                target="_blank" //opens in new browser
                rel="noopener noreferrer"
                className="ml-8 text-blue-700 hover:text-purple"
              >
                {" "}
                <FaGithub className="text-2xl" />
              </a>
            </div>

            <div className="border w-2/3 " />
            <p className="text-gray-300 my-2">
              CPTracker is a website that helps coders track their progress on
              coding platforms and provides insightful statistics for contests.
            </p>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col px-8 py-8">
            <img
              className="rounded-lg w-full h-80 mb-4"
              src={project2}
              alt="project 2"
            />
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold my-auto">
                DEADLOCK Zombie Shooter
              </h3>
              <a
                href="https://github.com/jnkarim/DeadLock-Zombie-Shooter"
                target="_blank" //opens in new browser
                rel="noopener noreferrer"
                className="ml-8 text-blue-700 hover:text-purple"
              >
                {" "}
                <FaGithub className="text-2xl" />
              </a>
            </div>

            <div className="border w-2/3 " />
            <p className="text-gray-300 my-2">
              DEADLOCK Zombie Shooter is a 2D Shooting game made with iGraphics
              engine using OpenGL library in C and C++.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
