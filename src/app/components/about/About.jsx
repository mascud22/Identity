import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  FlagIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  HomeIcon,
  InboxIcon,
  PaintBrushIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  ScaleIcon,
  SlashIcon,
  SparklesIcon,
  UserGroupIcon,
  ViewColumnsIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/16/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const About = () => {
  const aboutData = [
    {
      name: "Abshir Dahir",
      description: "I’m a passionate ",
    },
  ];
  const stats = [
    { label: "Projects", value: "25+" },
    { label: "Clients", value: "15+" },
    { label: "Experience", value: "3 Years" },
  ];
  return (
    <div className="flex flex-col mt-10">
      <h1 className=" text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2/ border-b-ui-color/10 py-4 rounded-xl">
        Space Talk{" "}
        <span className="bg-invert  mx-1 px-3 rounded-2xl text-invert-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20">
          About{" "}
        </span>{" "}
        <br className="" /> Me And Progress
      </h1>
      <div className="md:px-30">
        <div className="w-full flex-col border-2 border-ui-color/10 rounded-3xl  md:flex-row h-fit md:h-fit mt-10 bg-indigo-500/ md:px-   px-1 flex items-center gap-4 ">
          {/* <div className='flex w-full items-center justify-center '>
            <h1 className='text-text text-3xl font-bold'>About Me</h1>
          </div> */}
          <div className="w-full md:w-200 md:h-full h-full ml-2 flex items-center gap-3 border-ui-color/10 border-2/ bg-ui-color/ backdrop-blur-xl drop-shadow-[0_4px_18px] drop-shadow-ui-color/10 rounded-2xl p- hover:scale-101 transition-all ease-in-out order-0">
            <div className="flex  w-full  bg-secondary/ h-85 md:h-165 rounded-2xl items-center justify-center flex-2 overflow-hidden relative order-0">
              <img
                className="size-full object-cover md:object-cover  flex items-center"
                src="https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="sm:border-l-2 gap-4 sm:border-l-secondary   h-full flex p-4 flex-col     drop-shadow-[0_4px_58px]/ drop-shadow-ui-color/ w-full">
            {/* Intro */}
            <h1 className="text-text font-bold text-xl flex items-center gap-2">
              👋 Hello, I’m <span className="text-text-third">Abshir </span>{" "}
              <QuestionMarkCircleIcon className="size-6 cursor-pointer transition-all ease-in-out hover:scale-105" />
            </h1>
  
            <p className="text-text-third">
              I’m a passionate{" "}
              <b>Frontend Developer, Web Designer, and Graphic Designer</b> who
              loves turning ideas into clean, functional, and visually appealing
              digital experiences.
            </p>
  
            {/* What I Do */}
            <h2 className="text-text font-semibold text-lg flex items-center gap-2">
              {/* <InboxIcon className="w-5 h-5 text-text-third" /> */}
              What I Do
            </h2>
  
            <div className="flex flex-col gap-2 text-text-third">
              <p className=" max-w-120 truncate">
                {/* <CodeBracketIcon className="w-5 h-5 text-text-third hidden md:flex" /> */}
              
                  <b className="text-te my-2xt">Frontend </b> | Building interactive and responsive websites.
                
              </p>
  
              <p className=" max-w-120 truncate gap-2">
                {/* <GlobeAltIcon className="w-5 h-5 text-text-third hidden md:flex" /> */}
                <>
                  <b className="text-text my-2">Web Design </b> | Designing clean, modern, and user-friendly
                  layouts.
                </>
              </p>
  
              <p className=" max-w-120 truncate gap-2">
                {/* <ViewColumnsIcon className="w-5 h-5 text-text-third hidden md:flex" /> */}
                
                  <b className="text-text">Graphic Design </b> | Creating visually compelling graphics

              </p>
  
              <p className=" max-w-120 truncate gap-2">
                {/* <UserGroupIcon className="w-5 h-5 text-text-third hidden md:flex" /> */}
                
                  <b className="text-text  my-2">Collaboration </b> | Working closely with others and learning.
                
              </p>
            </div>
            <h2 className="text-text font-semibold text-lg flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-text-third" /> My Progress
            </h2>
            <div className="flex gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <span className="text-ui-color-text p-1 mb-2 rounded-3xl px-3 text-sm  bg-ui-color font-bold ">
                    {stat.value}
                  </span>
                  <span className="text-text-third text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
  
            {/* Skills & Tools */}
            {/* <h2 className='text-text font-semibold text-lg flex items-center gap-2'>
            <WrenchScrewdriverIcon className='w-5 h-5 text-text-third' />
            Skills & Tools
          </h2> */}
  
            <div className='flex flex-wrap gap-2 w-full'>
            {[
              'HTML',
              'JavaScript',
              'React',
              'Tailwind CSS',
              'UI/UX Design',
              'Graphic Design',
              
            ].map((skill, index) => (
              <button
                key={index}
                className='px-3 py-1 text-md rounded-full bg-secondary text-text font-semibold  text-sm'
              >
                {skill}
              </button>
            ))}
          </div>
            <h2 className="text-text font-semibold text-lg flex items-center gap-2">
              🎯 My Goal
            </h2>
  
            <p className="text-text-third ">
              I focus on <b>simplicity, clarity, and consistency</b>. I plan
              before I build, pay attention to details,
            </p>
           <div className="w-full flex items-center gap-3">
                <button className="mt-6  drop-shadow-[0_4px_48px]/ drop-shadow-white/ bg-invert text-invert-text rounded-2xl py-2 px-4 transition-all hover:scale-101 cursor-pointer active:scale-95 font-semibold flex-1">
                  Work me
                </button>
                
           </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default About;
