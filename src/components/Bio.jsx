import ProfilePic from "../assets/mypic.jpeg";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-4 lg:px-16">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="pb-8 text-5xl font-semibold tracking-tight">
            Glad to see you landing here!
          </h2>
          <span className="bg-gradient-to-r from-green-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent text-center">
            I build creative solutions with code.
          </span>
          <p className="my-4 text-2xl font-light max-w-xl text-center lg:text-left">
            A 3rd-year CSE student, based in Bangladesh, passionate about
            crafting user experiences through JavaScript, mostly react.js.
          </p>
        </div>
      </div>
      <div className="my-5 w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={ProfilePic}
          alt="Profile"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Bio;
