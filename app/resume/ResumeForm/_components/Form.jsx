"use client";
import React, { useState } from "react";
import CareerObjectiveSelector from "./_components/CareerObjectiveSelector";
import Projects from "./_FormComponents/Projects";
import Certificate from "./_FormComponents/Certificate";
import Skills from "./_FormComponents/Skills";
import TechSkills from "./_FormComponents/TechSkills";
import Courseware from "./_FormComponents/Courseware";
import EducationalBg from "./_FormComponents/EducationalBg";
import Personalinfo from "./_FormComponents/Personalinfo";
import { Button } from "/components/ui/button";
function Form() {
  const [objectives, setObjectives] = useState([]);
  const [selected, setSelected] = useState(null);

  const createObjectives = () => {
    const engineeringObjectives = [
      "To secure a position as an engineer where I can utilize my analytical and technical skills to solve real-world problems and contribute to organizational goals.",
      "Seeking a challenging engineering role that fosters innovation and growth while allowing me to apply my academic knowledge and project experience.",
      "To work in a dynamic and growth-oriented environment where I can apply my engineering skills, learn continuously, and contribute to technology-driven solutions.",
      "To obtain an engineering position in a forward-thinking company that values creativity, collaboration, and continuous improvement.",
      "Aiming to contribute to impactful engineering projects by leveraging my technical foundation, critical thinking, and passion for sustainable design.",
    ];
    setObjectives(engineeringObjectives);
  };
  return (
    <>
      <div className="mt-10 ">
        <h3 className="text-sm text-black">Add Details about Yourself</h3>
        <Personalinfo ></Personalinfo>
              {(objectives.length>0) &&  <CareerObjectiveSelector objectives={objectives} setSelected={setSelected} selected={selected}  />}
        <Button className="my-3 items-center" onClick={createObjectives}>Create objectives</Button>
        <TechSkills ></TechSkills>
        <Skills ></Skills>
        <Courseware ></Courseware>
        <Certificate ></Certificate>
        <Projects ></Projects>
        <EducationalBg ></EducationalBg>
      </div>
    </>
  );
}

export default Form;
