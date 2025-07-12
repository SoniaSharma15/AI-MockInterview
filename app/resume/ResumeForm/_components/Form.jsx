"use client";
import React, { useState } from "react";

import Projects from "./_FormComponents/Projects";
import Certificate from "./_FormComponents/Certificate";
import Skills from "./_FormComponents/Skills";
import TechSkills from "./_FormComponents/TechSkills";
import Courseware from "./_FormComponents/Courseware";
import EducationalBg from "./_FormComponents/EducationalBg";
import Personalinfo from "./_FormComponents/Personalinfo";
import { Button } from "/components/ui/button";
function Form({ resume, setResume }) {


  return (
    <>
      <div className="mt-10 ">
        <h3 className="text-sm text-black">Add Details about Yourself</h3>
        <Personalinfo setResume={setResume} resume={resume}></Personalinfo>
        <Certificate setResume={setResume} resume={resume}></Certificate>
        <TechSkills setResume={setResume} resume={resume}></TechSkills>
        <Skills setResume={setResume} resume={resume}></Skills>

        <Courseware setResume={setResume} resume={resume}></Courseware>
        <Projects setResume={setResume}></Projects>
        <EducationalBg setResume={setResume} resume={resume}></EducationalBg>
        {/* </div> */}
      </div>
    </>
  );
}

export default Form;
