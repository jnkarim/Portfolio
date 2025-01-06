const About = () => {
  return (
    <div className="flex justify-center items-center pb-4 px-16 my-36">
      <div className="w-full max-w-4xl">
        {" "}
        {/* Limit width */}
        {/* Header */}
        <h2 className="text-4xl flex justify-center items-center">
          <span className="mr-2 whitespace-nowrap">About Me</span>
        </h2>
        {/* Content Section */}
        <div className="text-2xl font-light leading-relaxed text-center mt-6">
          <p className="my-2">
            I am a CSE student at AUST with a passion for competitive
            programming and problem-solving. I specialize in building full-stack
            applications using the MERN stack. In my leisure time, I enjoy
            reading novels, with a particular love for Sherlock Holmes and
            Feluda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
