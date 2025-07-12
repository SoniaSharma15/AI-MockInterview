"use client";
import React, { useState } from "react";
import { Input } from "/components/ui/input";
import { Button } from "/components/ui/button";

function Skills({ setResume, resume }) {
  const [Skillss, setSkillss] = useState([{ skillName: "" }]);

  const handleUpdateSkills = (index, field, value) => {
    const updated = [...Skillss];
    updated[index][field] = value;
    setSkillss(updated);
    setResume((prev) => ({
      ...prev,
      softSkillsArr: updated,
    }));
  };
  const handleAddSkills = () => {
    setSkillss([...Skillss, { skillName: "" }]);
  };
  const handleRemoveSkills = (index) => {
    const updated = Skillss.filter((_, i) => i !== index);
    setSkillss(updated);
      setResume((prev) => ({
      ...prev,
      softSkillsArr: updated,
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold my-3">Skills</h2>

      {Skillss.map((cert, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 my-3 border p-3 rounded-md relative"
        >
          <div className="my-1">
            <label htmlFor="Project Name" className="text-black font-medium">
              Skill Name
            </label>
            <Input
              type="text"
              placeholder="Ex. Resume Builder"
              required
              value={cert.projectName}
              onChange={(e) =>
                handleUpdateSkills(index, "skillName", e.target.value)
              }
            />
          </div>
          <button
            className="absolute top-1 right-1 text-red-600"
            onClick={() => handleRemoveSkills(index)}
          >
            🗑️
          </button>
        </div>
      ))}
      <button
        className="bg-black text-white px-4 py-2 rounded mt-4"
        onClick={handleAddSkills}
      >
        ➕ Add Skills
      </button>
    </div>
  );
}

export default Skills;
