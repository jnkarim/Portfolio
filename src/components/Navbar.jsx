import logo from "../assets/logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-6">
      <div className="mx-8 flex flex-shrink-0 items-center px-8">
        <h1 className="text-blue-500 font-bold text-3xl font-curly "> jnkarim </h1>
      </div>


      <div className="m-8 flex items-center gap-4 text-2xl">
        {/* GitHub Icon */}
        <a
          href="https://github.com/jnkarim"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 text-blue-700"
        >
          <FaGithub />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/julker-nayeen-karim-1ba51628a/e"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-grey-400 text-blue-700"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
