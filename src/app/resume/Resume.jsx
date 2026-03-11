import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";
import { ArrowBigUp } from "lucide-react";

// Resume.jsx
const Resume = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r/ from-ui-color/10 to-purple-500/10">
      <div className="max-w-4xl mx-auto text-center flex items-center justify-center flex-col gap-">
        <ArrowUpCircleIcon className="sm:size-25 size-19 mb-2 text-ui-color"/>
        <h2 className=" text-lg sm:text-2xl font-bold text-text mb-1">
          Download My Resume
        </h2>
        <p className="text-text-third mb-8 max-w-120">
          Get a detailed overview of my experience, skills, and qualifications of my experience, skills, and qualifications.
        </p>
        <button className="py-2 px-3 bg-invert text-invert-text rounded-2xl sm:w-110 w-full font-semibold transition-all ease-in-out cursor-pointer hover:scale-103">
            Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;