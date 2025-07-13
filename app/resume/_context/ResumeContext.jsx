"use client"
import { createContext, useEffect, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState({
    projArr: [],
    personalDetailsArr: [],
    techSkillsArr: [],
    softSkillsArr: [],
    courseWareArr: [],
    educationArr: [],
    certificatesArr: [],
    objective: []
  });
const value={ resume, setResume }

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};