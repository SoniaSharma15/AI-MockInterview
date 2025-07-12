"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {Button} from "/components/ui/button"
import { useRouter } from "next/navigation";

function ResumeLive({ resume }) {
  const router = useRouter()

  // useEffect(() => {

  //  console.log("jj", resume?.projArr[0]?.length>0)
  // }, [resume])

  return (
    <>
      <div className="my-10 ">
        <div className="sticky top-20 text-xs border-2 p-5 font-sans ">
          <div className="p-1 flex gap-10 text-justify">
            <div className="w-2/3">
              <h2 className="text-3xl font-bold">
                {resume?.personalDetailsArr?.fullname}
              </h2>
              <p className="mb-3">
                objective Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Doloremque, ea!
              </p>
              {(resume?.projArr[0]?.name?.length > 0 ||
                resume?.projArr[0]?.desc?.length > 0 ||
                resume?.projArr[0]?.projLink?.length > 0) && (
                <>
                  <h2 className="text-xl font-medium">Projects</h2>
                  <Link href={`${resume?.projArr.projLink}`}>
                    <h3 className="my-1 font-medium decoration underline">
                      {resume?.projArr[0]?.name}
                    </h3>
                  </Link>
                  <ul className="list-disc pl-5">
                    <li>{resume?.projArr[0]?.desc}</li>
                  </ul>
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
            <div className="w-1/3 ">
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
                      </div>
    </>
  );
}

export default ResumeLive;
