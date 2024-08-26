import { FaRegImage } from "react-icons/fa6";

function LoadingSkills() {
  const skillsData = [1,1,1,1,1,1,1]
  return (
    <div id="skills" className="my-10 shadow-md shadow-neutral-700 py-10 px-2">
      <h2 className="shadow-md shadow-neutral-700 mb-10 title-green text-2xl text-center font-black mx-2 p-4 sm:text-3xl">
      Skills
      </h2>
      <div className="w-full my-12 flex overflow-hidden">
        {skillsData.map((skill, id) => (
          <div className="w-36  h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group hover:scale-[1.15] cursor-pointer "
            key={id}>
            <div className="animate-pulse flex flex-col items-center justify-center gap-3 p-6 border border-neutral-700  shadow-sm shadow-neutral-500 group-hover:border-sky-500 transition-all duration-700 overflow-x-hidden">
              <FaRegImage className="w-10 h-10 rounded-lg" />
              <p className="text-white text-sm sm:text-lg">
                Loading
              </p>
            </div>
          </div>
        ))}
      </div>
  </div>
);
};

export default LoadingSkills;