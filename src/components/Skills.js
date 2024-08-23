import React from 'react';
import { FaHtml5, FaCss3,  FaReact,  FaGithub,   FaJava } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { BiLogoCPlusPlus } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";


const skillsIcon = [{
  HTML: <FaHtml5 />,
  CSS: <FaCss3 />,
  Javascript: <DiJavascript1 />,
  React: <FaReact />,
  C: <BiLogoCPlusPlus />,
  Java: <FaJava />,
  Github: <FaGithub />,
  Mysql: <GrMysql />,

}];

function SkillsList() {
  const skills = skillsIcon[0];

  return (
    <section className='flex flex-col py-10 px-5 justify-center ' id='skills'>
       <h2 className="text-4xl text-white border-b-2 mb-3 w-[120px] font-google-font ">Skills </h2>
       <div className="skills-list my-8 ">
     
      {Object.entries(skills).map(([key, icon], index) => (
        <div key={index} className="skill-item h-[100px] w-[100px] " data-aos="flip-right" data-aos-duration="1500">
          <span className="skill-name font-bold text-2xl" >{key}</span>
          <div className="skill-icon ">{icon}</div>
        </div>
      ))}
    </div>
    </section>
   
  );
}

export default SkillsList;
