"use client";
import React, { useState } from "react";
import { Textarea } from "/components/ui/textarea";
import { Button } from "/components/ui/button";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import Form from "./_components/Form";
import ResumeLive from "./_components/ResumeLive";

function ResumeForm() {
  //   const router = useRouter();

  // const [loading, setLoading] = useState(false);
  // const { user } = useUser();

  const [resume, setResume] = useState({
    projArr: [],
    personalDetailsArr: [],
    techSkillsArr: [],
    softSkillsArr: [],
    courseWareArr: [],
    educationArr: [],
    certificatesArr: [],
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <Form setResume={setResume} resume={resume}></Form>
      <div>

      <ResumeLive resume={resume}></ResumeLive>
      {sessionStorage.setItem("resume", JSON.stringify(resume))}
      <Button onClick={()=>router.push("/resume/ResumeForm/objectivePreview")}
       className="my-10 hover:cursor-pointer hover:bg-gradient-to-l">Submit</Button>
      </div>
    </div>
  );
}

export default ResumeForm;
