"use client"
import React, { useState } from 'react'
import {Input} from "/components/ui/input"
import { useContext } from "react";
import { ResumeContext } from "../../../_context/ResumeContext";

function Courseware() {
   const {setResume } = useContext(ResumeContext);

    const [Coursewares, setCoursewares] = useState([
    { skillName: ""},
  ]);

   const handleUpdateCourseware = (index, field, value) => {
    const updated = [...Coursewares];
    updated[index][field] = value;
    setCoursewares(updated);
     setResume(prev => ({
  ...prev,"courseWareArr":updated} ))
  };
  const handleAddCourseware = () => {
    setCoursewares([
      ...Coursewares,
      { skillName: ""},
    ]);
  };
   
const handleRemoveCourseware = (index) => {
    const updated = Coursewares.filter((_, i) => i !== index);
    setCoursewares(updated);
      setResume(prev => ({
  ...prev,"courseWareArr":updated} ))
  };

  return (
    <div>
      <h2 className="text-xl font-bold my-3">Courseware</h2>

      {Coursewares.map((cert, index) => (
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
              
              value={cert.projectName}
              onChange={(e) =>
                handleUpdateCourseware(index, "skillName", e.target.value)
              }
            />
          </div>
              <button
            className="absolute top-1 right-1 text-red-600"
            onClick={() => handleRemoveCourseware(index)}  >
            🗑️
          </button>
        </div>
      ))}
      <button
        className="bg-black text-white px-4 py-2 rounded mt-4"
        onClick={handleAddCourseware}
      >
        ➕ Add Courseware
      </button>
    </div>




  )
}

export default Courseware