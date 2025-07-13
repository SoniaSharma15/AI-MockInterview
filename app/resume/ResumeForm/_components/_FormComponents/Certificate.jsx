"use client"
import React, { useState } from 'react'
import {Input} from "/components/ui/input"
import { useContext } from "react";
import { ResumeContext } from "../../../_context/ResumeContext";

function Certificate() {
   const {setResume } = useContext(ResumeContext);

    const [certificates, setCertificates] = useState(
    [{ certName: "", driveLink: "" }],
  );

   const handleUpdateCertificate = (index, field, value) => {
    const updated = [...certificates];
    updated[index][field] = value;
    setCertificates(updated);
    setResume(prev => ({
  ...prev,"certificatesArr":updated} ))
  };
  const handleAddCertificate = () => {
    setCertificates([
      ...certificates,
      { certName: "", driveLink: "" },
    ]);
  };
const handleRemoveCertificate = (index) => {
    const updated = certificates.filter((_, i) => i !== index);
    setCertificates(updated);
        setResume(prev => ({
  ...prev,"certificatesArr":updated} ))
  };

  return (
    <div>
      <h2 className="text-xl font-bold my-3">Certificate</h2>
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 my-3 border p-3 rounded-md relative"
        >
          <div className="my-1">
            <label htmlFor="Project Name" className="text-black font-medium">
              Certificate Name{" "}
            </label>
            <Input
              type="text" placeholder="Ex. Resume Builder"
              
              value={cert.certName}
              onChange={(e) =>
                handleUpdateCertificate(index, "certName", e.target.value)
              }
            />
          </div>
          <div className="my-1">
            <label htmlFor="Project Live Link" className="text-black font-medium">
              Drive Link{" "}
            </label>
            <Input
              type="text" placeholder="Ex. https://yourproject.live"
              
              value={cert.driveLink}
              onChange={(e) =>
                handleUpdateCertificate(index, "driveLink", e.target.value)
              }
            />
          </div>

          <button
            className="absolute top-1 right-1 text-red-600"
            onClick={() => handleRemoveCertificate(index)}  >
            🗑️
          </button>
        </div>
      ))}
      <button
        className="bg-black text-white px-4 py-2 rounded mt-4"
        onClick={handleAddCertificate}
      >
        ➕ Add Certificate
      </button>
      
    </div>




  )
}

export default Certificate