
const Achievement = () => {
  return (
    <div className="pb-16 px-8 my-24 text-white">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-300">
        Achievements
      </h2>

      {/* Achievements List */}
      <div className="p-8 shadow-2xl rounded-lg bg-gray-800 max-w-4xl mx-auto">
        <div className="flex items-center mb-6 border-b-2 border-gray-600 pb-4">
          <p className="text-2xl font-semibold text-gray-200">Key Achievements</p>
        </div>

        <ul className="list-inside list-disc pl-6 space-y-4 text-lg text-gray-300">
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 bg-yellow-600 rounded-full mr-3 mt-2"></span>
            Won the Junior Segment Programming Contest at the Cefalo AUST CSE
            Carnival 2.0.
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 bg-yellow-600 rounded-full mr-3 mt-2"></span>
            Secured second place in the Software Exhibition at the AUST CSE
            Carnival 4.0.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
