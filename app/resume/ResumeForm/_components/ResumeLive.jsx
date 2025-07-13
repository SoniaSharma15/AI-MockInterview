"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {Button} from "/components/ui/button"
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { ResumeContext } from "../../_context/ResumeContext";

function ResumeLive() {
     const router = useRouter();
     const pathname=usePathname();
 const {resume} = useContext(ResumeContext);

  return (
    <>
      <div className="my-10 break-words ">
        <div className="sticky top-20 ">
       <div className="text-xs shadow-2xl shadow-gray-400  p-5 border border-gray-300 font-sans">

          <div className="p-1 flex gap-10  break-words">
            <div className="w-2/3 min-w-0">
              <h2 className="text-3xl font-bold">
                {resume?.personalDetailsArr?.fullname}
              </h2>
              <p className="mb-3">
               {resume.objective}
              </p>
             {resume?.projArr?.length > 0 && (
  <>
    <h2 className="text-xl font-medium">Projects</h2>
    {resume.projArr.map((project, index) => (
      (project.name?.length > 0 || project.desc?.length > 0 || project.projLink?.length > 0) && (
        <div key={index}>
          <Link href={project.projLink}>
            <h3 className="my-1 font-medium underline">{project.name}</h3>
          </Link>
          <ul className="list-disc pl-5">
            <li>{project.desc}</li>
          </ul>
        </div>
      )
    ))}
  </>
)}
              {resume?.educationArr?.length > 0 && (
                <>
                  <h2 className="text-xl font-medium mb-1 mt-2">
                    Educational Background
                  </h2>
                  {resume?.educationArr.map(
                    (edu, index) =>
                      (edu?.CName ||
                        edu?.Date ||
                        edu?.Specialization ||
                        edu?.percentage ||
                        edu?.Degree) && (
                        <div key={index}>
                          <Link href={"/"}>
                            <h3 className="my-1 font-medium decoration underline text-xl">
                              {edu?.Degree}
                            </h3>
                          </Link>
                          <ul className="py-1">
                            <li>{edu?.CName}</li>
                            <li>{edu?.Date}</li>
                          </ul>
                          <ul className="py-1 list-disc pl-5">
                            <li>{edu?.Specialization}</li>
                            <li>{edu?.percentage}</li>
                          </ul>
                        </div>
                      )
                  )}
                </>
              )}
            </div>
            <div className="w-1/3 min-w-0">
              {(resume?.personalDetailsArr.City?.length > 0 ||
                resume?.personalDetailsArr.Country?.length > 0 ||
                resume?.personalDetailsArr.Portfolio?.length > 0 ||
                resume?.personalDetailsArr.Email?.length > 0 ||
                resume?.personalDetailsArr.Linkedin?.length > 0 ||
                resume?.personalDetailsArr.Github?.length > 0) && (
                <>
                  <h2 className="text-xl font-medium">
                    {resume?.personalDetailsArr.City}
                  </h2>
                  <p>{resume?.personalDetailsArr.Country}</p>
                  <ul>
                    <Link href={"/"}>
                      <li className=" font-medium  text-xs">
                        {resume?.personalDetailsArr.Portfolio}
                      </li>
                    </Link>
                    <Link href={"/"}>
                      <li className=" font-medium  text-xs">
                        {resume?.personalDetailsArr.Email}
                      </li>
                    </Link>
                    <Link href={"/"}>
                      <li className=" font-medium  text-xs">
                        {resume?.personalDetailsArr.Linkedin}
                      </li>
                    </Link>
                    <Link href={"/"}>
                      <li className=" font-medium  text-xs">
                        {resume?.personalDetailsArr.Github}
                      </li>
                    </Link>
                  </ul>
                </>
              )}
              {resume?.techSkillsArr?.length > 0 && (
                <>
                <h2 className="text-xl font-medium mb-1 mt-2">Skills</h2>
                  <h2 className="text-sm font-medium my-1">Tech Skills</h2>
                  <ul className="list-disc pl-7">
                    {resume?.techSkillsArr.map(
                      (tech, index) =>
                        tech?.skillName && <li key={index}>{tech.skillName}</li>
                    )}
                  </ul>
                </>
              )}

              {resume?.softSkillsArr?.length > 0 && (
                <>
                  <h2 className="text-sm font-medium my-1">Soft Skills</h2>
                  <ul className="list-disc pl-7">
                    {resume?.softSkillsArr.map(
                      (soft, index) =>
                        soft?.skillName && <li key={index}>{soft.skillName}</li>
                    )}
                  </ul>
                </>
              )}

              {resume?.courseWareArr?.length > 0 && (
                <>
                  <h2 className="text-sm font-medium my-1">Course Ware</h2>
                  <ul className="list-disc pl-7">
                    {resume?.courseWareArr.map(
                      (course, index) =>
                        course?.skillName && (
                          <li key={index}>{course.skillName}</li>
                        )
                    )}
                  </ul>
                </>
              )}

        {resume?.certificatesArr?.length > 0 && (
  <>
    <h2 className="text-xl font-medium mb-1 mt-2">Certificates</h2>
    <ul className="list-disc pl-7">
      {resume?.certificatesArr.map((cert, index) => (
        cert?.certName && (
          <li key={index}>
            <Link href={`${cert?.driveLink}`}>
              {cert.certName}
            </Link>
          </li>
        )
      ))}
    </ul>
  </>
)}
            </div>
          </div>
        </div>
            <Button onClick={()=>router.push(`${pathname=="/resume/ResumeForm/"?"/resume/ResumeForm/resumePreview":"/resume/ResumeForm/resumePreview"}`)}
       className="my-10 hover:cursor-pointer hover:bg-gradient-to-l">Submit</Button>
       
        </div>
                      </div>
    </>
  );
}

export default ResumeLive;
