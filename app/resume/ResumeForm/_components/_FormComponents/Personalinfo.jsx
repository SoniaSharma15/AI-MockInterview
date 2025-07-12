"use client";
import React, { useState } from "react";
import {Input} from "/components/ui/input"
import {Button} from "/components/ui/button"

function Personalinfo({setResume,resume}) {
    const [resumeData, setResumeData] = useState({
    fullname: "",
    City: "",
    Country: "",
    Portfolio: "",
    Github:"",
    Linkedin:"",
    Email:"",
  });
  let name, value;
  const handleUpdatePersonalData = async (e) => {
    name = e.target.name;
    value = e.target.value;
    setResumeData({ ...resumeData, [name]: value });
         setResume(prev => ({
  ...prev,"personalDetailsArr":resumeData} ))
  };
 
  return (
<>
 <h2 className="text-xl font-bold">Personal Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="my-1">
            <label htmlFor="Full Name" className="text-black font-medium">
              Full Name
            </label>
            <Input type="text"
              placeholder="Ex. Ram Raj"
              
             name="fullname"
              value={resumeData.fullname}
              onChange={handleUpdatePersonalData}
            />
          </div>
          <div className="my-1">
            <label htmlFor="Full Name" className="text-black font-medium">
              City
            </label>
            <Input type="text"
              placeholder="Ex. Lucknow"
              
             name="City"
              value={resumeData.City}
              onChange={handleUpdatePersonalData}
            />
          </div>
          <div className="my-1">
            <label htmlFor="Full Name" className="text-black font-medium">
              Country
            </label>
            <Input type="text"
              placeholder="Ex. India"
              
             name="Country"
              value={resumeData.Country}
              onChange={handleUpdatePersonalData}
            />
          </div>
          <div className="my-1">
            <label htmlFor="Full Name" className="text-black font-medium">
              Portfolio
            </label>
            <Input type="text"
              placeholder="Ex. Portfolio "
              
             name="Portfolio"
              value={resumeData.Portfolio}
              onChange={handleUpdatePersonalData}
            />
          </div>
          <div className="my-1">
            <label htmlFor="Full Name" className="text-black font-medium">
              Github
            </label>
            <Input type="text"
              placeholder="Ex. Github  "
              
             name="Github"
              value={resumeData.Github}
              onChange={handleUpdatePersonalData}
            />
          </div>
          <div className="my-1">
            <label htmlFor="Full Name" className="text-black font-medium">
              Linkedin
            </label>
            <Input type="text"
              placeholder="Ex. Linkedin "
              
             name="Linkedin"
              value={resumeData.Linkedin}
              onChange={handleUpdatePersonalData}
            />
          </div>
          <div className="my-1">
            <label htmlFor="Full Name" className="text-black font-medium">
              Email
            </label>
            <Input type="text"
              placeholder="Ex. abc@gmail.com "
              
             name="Email"
              value={resumeData.Email}
              onChange={handleUpdatePersonalData}
            />
          </div>
                </div>
</>  )
}

export default Personalinfo