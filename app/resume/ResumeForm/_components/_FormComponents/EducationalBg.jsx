"use client"
import React, { useState } from 'react'
import {Input} from "/components/ui/input"
import { useContext } from "react";
import { ResumeContext } from "../../../_context/ResumeContext";

function EducationalBg() {
   const { setResume } = useContext(ResumeContext);

    const [EducationalBgs, setEducationalBgs] = useState([
    { Degree: "", CName:"",Date:"",Specialization:"",percentage:""},
  ]);

   const handleUpdateEducationalBg = (index, field, value) => {
    const updated = [...EducationalBgs];
    updated[index][field] = value;
    setEducationalBgs(updated);
     setResume(prev => ({
  ...prev,"educationArr":updated} ))
  };
 const handleAddEducationalBg = () => {
  setEducationalBgs([
    ...EducationalBgs,
    { Degree: "", CName: "", Date: "", Specialization: "", percentage: "" },
  ]);
};
const handleRemoveEducationalBg = (index) => {
    const updated = EducationalBgs.filter((_, i) => i !== index);
    setEducationalBgs(updated);
     setResume(prev => ({
  ...prev,"educationArr":updated} ))
  };

  return (
    <div>
      <h2 className="text-xl font-bold my-3">EducationalBg</h2>

      {EducationalBgs.map((cert, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 my-3 border p-3 rounded-md relative"
        >
     <div className="my-1">
      <label htmlFor="Degree" className="text-black font-medium">
        Degree
      </label>
      <Input
        type="text"
        placeholder="Ex. B.Tech"
        
        value={cert.Degree}
        onChange={(e) =>
          handleUpdateEducationalBg(index, "Degree", e.target.value)
        }
      />
    </div>
 <div className="my-1">
      <label htmlFor="CName" className="text-black font-medium">
        College Name
      </label>
      <Input
        type="text"
        placeholder="Ex. IIT Delhi"
        
        value={cert.CName}
        onChange={(e) =>
          handleUpdateEducationalBg(index, "CName", e.target.value)
        }
      />
    </div>
<div className="my-1">
      <label htmlFor="Date" className="text-black font-medium">
        Completion Date
      </label>
      <Input
        type="text"
        placeholder="Ex. 2024"
        
        value={cert.Date}
        onChange={(e) =>
          handleUpdateEducationalBg(index, "Date", e.target.value)
        }
      />
    </div>
 <div className="my-1">
      <label htmlFor="Specialization" className="text-black font-medium">
        Specialization
      </label>
      <Input
        type="text"
        placeholder="Ex. Computer Science"
        
        value={cert.Specialization}
        onChange={(e) =>
          handleUpdateEducationalBg(index, "Specialization", e.target.value)
        }
      />
  </div>
    <div className="my-1">
      <label htmlFor="percentage" className="text-black font-medium">
        Percentage
      </label>
      <Input
        type="text"
        placeholder="Ex. 85%"
        
        value={cert.percentage}
        onChange={(e) =>
          handleUpdateEducationalBg(index, "percentage", e.target.value)
        }
      />
  </div>

              <button
            className="absolute top-1 right-1 text-red-600"
            onClick={() => handleRemoveEducationalBg(index)}  >
            🗑️
          </button>
        </div>
      ))}
      <button
        className="bg-black text-white px-4 py-2 rounded mt-4"
        onClick={handleAddEducationalBg}
      >
        ➕ Add EducationalBg
      </button>
    </div>




  )
}

export default EducationalBg