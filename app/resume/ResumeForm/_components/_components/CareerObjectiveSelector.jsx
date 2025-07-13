import React, { useEffect } from 'react';
import { useContext } from "react";
import { ResumeContext } from "../../../_context/ResumeContext";

const CareerObjectiveSelector = ({objectives,setSelected,selected}) => {
   const { resume, setResume } = useContext(ResumeContext);

  useEffect(() => {
  setResume(prev => ({
  ...prev,"objective":selected} )) 
 console.log(resume)
}, [selected])

  
  return (
    <div className='p-4 font-serif'>
      <h2>Select Your Career Objective</h2>
      <ul className='p-0 grid grid-cols-1'>
        {Array.isArray(objectives) && objectives.map((obj, index) => (
          <li key={index} style={{ margin: '1rem 0' }}>
            <label className='block cursor-pointer'>
              <input
                type="radio"
                name="careerObjective"
                value={obj}
                checked={selected === obj}
                onChange={() => setSelected(obj)}
                style={{ marginRight: '0.5rem' }}
              />
              {obj}
            </label>
          </li>
        ))}
      </ul>
      {selected && (
        <div className="mt-4 font-bold" >
          You selected: <span style={{ color: '#007ACC' }}>{selected}</span>
        </div>
      )}
    </div>
  );
};

export default CareerObjectiveSelector;