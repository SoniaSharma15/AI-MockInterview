"use client"
import React, { useState } from 'react'
import {Input} from "/components/ui/input"

function TechSkills({resume,setResume}) {
    const [TechSkillss, setTechSkillss] = useState([
    { skillName: ""},
  ]);

   const handleUpdateTechSkills = (index, field, value) => {
    const updated = [...TechSkillss];
    updated[index][field] = value;
    setTechSkillss(updated);
  setResume((prev) => ({
      ...prev,
      techSkillsArr: updated,
    }));
  };
  const handleAddTechSkills = () => {
    setTechSkillss([
      ...TechSkillss,
      { skillName: ""},
    ]);
  };
const handleRemoveTechSkills = (index) => {
    const updated = TechSkillss.filter((_, i) => i !== index);
    setTechSkillss(updated);
    setResume((prev) => ({
      ...prev,
      techSkillsArr: updated,
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold my-3">TechSkills</h2>

      {TechSkillss.map((cert, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 my-3 border p-3 rounded-md relative"
        >
          <div className="my-1">
            <label htmlFor="Project Name" className="text-black font-medium">
              Skill Name
            </label>
            <Input
              type="text" placeholder="Ex. Resume Builder"
              required
              value={cert.projectName}
              onChange={(e) =>
                handleUpdateTechSkills(index, "skillName", e.target.value)
              }
            />
          </div>
              <button
            className="absolute top-1 right-1 text-red-600"
            onClick={() => handleRemoveTechSkills(index)}  >
            🗑️
          </button>
        </div>
      ))}
      <button
        className="bg-black text-white px-4 py-2 rounded mt-4"
        onClick={handleAddTechSkills}
      >
        ➕ Add TechSkills
      </button>
         
    </div>




  )
}

export default TechSkills