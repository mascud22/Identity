import {
  BuildingLibraryIcon,
  CircleStackIcon,
  DocumentTextIcon,
  FireIcon,
  MapIcon,
  MegaphoneIcon,
  PlayCircleIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import { DocumentIcon } from "@heroicons/react/16/solid";
import React from "react";

const Skills = () => {
  const skillsData = [
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    skill: ["JavaScript", "TypeScript", "HTML", "CSS"], // ← array of skills
    categorie: "Web Development",
    secondLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    thirdLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    fourthLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Javascript is my favourite programming language and I know it well",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    skill: ["MongoDB", "Express", "Node.js"], // ← array
    categorie: "Web Development",
    secondLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSer5zs_osl8bYfvfcy-2o-n0S8-Q-p_9U-g&s",
    thirdLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    fourthLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "My database is MongoDB I use a lot in my apps",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s",
    skill: ["React", "Next.js", "Redux"], // ← array
    categorie: "Web Development",
    secondLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4Gm4ZZkmeriyXZlpU7_sXXHYDt06yt9yLQ&s",
    thirdLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    fourthLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "The only framework I use is React so I enjoy it",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    skill: ["Tailwind", "Bootstrap", "Sass"], // ← array
    categorie: "Web Development",
    secondLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwOodD9dyO-Js6H5K2dWK10TBEA1pvzoFCQ&s",
    thirdLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    fourthLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    description: "I enjoy building responsive and modern UIs",
  },
];
  return (
    <div className="flex flex-col gap-2 mt-5 border-t-2/ border-t-secondary pt-10 w-full sm:px-25 px- items-center  relative">
      <div className="h-1 w-50 md:flex lg:flex hidden  bg-secondary absolute top-22 left-40"></div>
      <div className="h-1 w-50 md:flex lg:flex hidden bg-secondary absolute top-22 right-40"></div>
      <h1 className=" text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2/ border-b-ui-color/ py-4 rounded-xl">
        Great Idea{" "}
        <span className=" text-text-third ">
          Cames From, <br className="hidden sm:flex" /> Showcasing{" "}
          <span className="bg-invert  mx-1 px-3 rounded-2xl text-invert-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20">
            Skills
          </span>{" "}
          In Action.
        </span>
      </h1>
      {/* <p className='text-text-third w-100 text-center mt-2'>Great Work cames from great skills so here is the best of skills that match your system</p> */}
      <div className=" flex items-center  p-3 flex-col bg-ui-color/ w-full h-fit gap-5 ">
        {/* <div className='flex items-center flex-col justify-center'>
              <h1 className='text-lg text-text font-semibold ml-4 '>  My Main Skills </h1>
              <p className=' text-text-third ml-4 sm:w-100 text-center'>here is my main skills i here is my main skills i  cant lie man this is all man  cant lie man this is all man</p>
          </div> */}

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-between ">
          {skillsData.map((skillList, index) => (
            <div key={index} className="bg-ui-color/ drop-shadow-[0_4px_38px]/ drop-shadow-ui-color/ border-l-2/ border-secondary/ w-full hover:sm:w-80   sm:w-70 h-fit flex flex-col items-start gap-2 p-4 transition-all ease-in-out cursor-pointer hover:scale-103">
              <div className="flex items-center justify-between w-full ">
                <div className="flex items-center gap-2">
                 <div className="flex items-center gap-1 flex-wrap">
                    {[skillList.logo, skillList.secondLogo, skillList.thirdLogo, skillList.fourthLogo].map((logo, index) => (
                      <div key={index} className="sm:size-10 md:size-10 size-9 bg-ui-color rounded-3xl flex items-center justify-center ml-2 flex-wrap">
                        <div className="sm:size-10 md:size-10 size-9 bg-secondary rounded-3xl flex items-center justify-center overflow-hidden border-4 border-ui-color/10">
                          <img className="size-full object-cover" src={logo} alt={skillList.skill} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <FireIcon className=" text-text size-5 mr-3 transition-all ease-in-out cursor-pointer hover:scale-103" />
              </div>
              <div className="flex flex-col  ml-2">
                <div className=" w-60 space-x-3 truncate">
                  {skillList.skill.map((item,index) => (
                    <span key={index} className="text-text textsm font-semibold   ">
                    
                    {item}
                  </span>
                  ))}
                </div>
                <span className="text-text-third text-sm">
                  {" "}
                  {skillList.categorie}{" "}
                </span>
              </div>
              {/* <p className="text-text-third w-full line-clamp-2">
                {" "}
                {skillList.description}{" "}
              </p> */}
              <button className="py-[8px] text-sm px-2 bg-invert text-invert-text rounded-2xl  w-full font-semibold transition-all ease-in-out cursor-pointer hover:scale-103">
            Look Out
          </button>
            </div>
          ))}
        </div>
        <div className="bg-ui-color/ drop-shadow-[0_4px_38px] drop-shadow-ui-color/10 border-2 border-ui-color/15 rounded-4xl w-full hover:sm:w-full    sm:w-full h-fit flex flex-col items-center gap-2 sm:p-10 p-4 transition-all ease-in-out cursor-pointer hover:scale-103 ">
          <div className="flex items-center gap-1.5">
            <h1 className=" text-text font-semibold text-xl text-center">
              Other Skills
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <div className="size-8 bg-secondary border-2 border-invert/50 overflow-hidden rounded-3xl rotate-5">
              <img className="object-cover size-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pfTCjMTfvF7G1dFpna_H5OW6QNYwmHwKcg&s" alt="" />
            </div>
            <div className="size-8 bg-secondary border-2 border-invert/50 overflow-hidden rounded-3xl rotate-5">
              <img className="object-cover size-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoT4t9qPZK_lgT0QBZM8iMdu1vGStV6xbWhw&s" alt="" />
            </div>
            <div className="size-8 bg-secondary border-2 border-invert/50 overflow-hidden rounded-3xl rotate-5">
              <img className="object-cover size-full" src="https://pbs.twimg.com/profile_images/1272878358150275078/iBJehkOi_400x400.png" alt="" />
            </div>
            <div className="size-8 bg-secondary border-2 border-invert/50 overflow-hidden rounded-3xl rotate-5">
              <img className="object-cover size-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Cm4lS7is_5I41qqjFEtg_qFrnkdEf5mxDQ&s" alt="" />
            </div>
            <div className="size-8 bg-secondary border-2 border-invert/50 overflow-hidden rounded-3xl rotate-5">
              <img className="object-cover size-full" src="https://www.cmswire.com/-/media/5a42386ea1784375b3d159aa3570372f.ashx" alt="" />
            </div>
          </div>
          <p className="text-text-third w-full line-clamp-2 text-center sm:w-130">
            I have several skills like <b>Photoshop</b> <b>Illustrator</b>{" "}
            <b>Adobe after Effect</b> <b>Graphic Design</b> <b>Motion Design</b>{" "}
            <b>UI/UX Design</b> <b>Web Design</b>{" "}
          </p>
          <button className="py-2 px-3 bg-invert text-invert-text rounded-2xl sm:w-110 w-full font-semibold transition-all ease-in-out cursor-pointer hover:scale-103">
            Look Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
