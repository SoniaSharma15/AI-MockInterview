"use client";
import React from "react";
import { Input } from "/components/ui/input";
import { Textarea } from "/components/ui/textarea";
import { Button } from "@components/ui/button";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { LoaderIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../utils/db";
import { softSkillsMockInterview } from "../../../utils/Schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function JobForm({ setOpenDialog }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const [JobData, setJobData] = useState({
    jobPosition: "",
    jobDesc: "",
    jobExperience: "",
    skillBasedOrNot: "",
  });
  let name, value;

  const handleUpdateJobData = async (e) => {
    name = e.target.name;
    value = e.target.value;
    setJobData({ ...JobData, [name]: value });
  };

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();


    const InputPrompt = `${
      JobData.skillBasedOrNot === "yes"
        ? `Job Position:${JobData.jobPosition} , Job Description:${JobData.jobDesc}, Job Experience:${JobData.jobExperience} .Provide ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Soft skill or HR interview question with answer on the basis of above provided information in JSON format .Provide easy questions and in simple language.Output Format must be like this only:` +
          "```json {[    {      'question': '',      'answer': ''    }  ]}"
        :  `.Provide ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Soft skill or HR interview question in JSON format.` +
       `Provide easy questions and in simple language.Output Format must be like this only:` +
       ` Example: Why should we hire you ? or Tell me about your weakness and how you are overcoming that.
    .` +`Provide a ideal answer for questions`+
         "```json {[    {      'question': '',      'answer': ''    }  ]}"
    }`;

        // Gemini Ai Model
    const genAI = new GoogleGenerativeAI(
      "AIzaSyAryrvuYBmpC64pp4BDyJoZrKNsjtUGoDw"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(InputPrompt);
      const MockJsonResp =
        result.response.text().replace("```json", "").replace("```", "") ||
        "{}";

      // setJsonResponse(MockJsonResp);
            // console.log(MockJsonResp)

    if (MockJsonResp) {
      const resp = await db
        .insert(softSkillsMockInterview)
        .values({
          mockId: uuidv4(), //⇨9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
          jsonMockResp: MockJsonResp,
          jobPosition: JobData.jobPosition,
          jobDesc: JobData.jobDesc,
          skillBasedOrNot: JobData.skillBasedOrNot,
          jobExperience: JobData.jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: softSkillsMockInterview.mockId });
      if (resp) {
        setLoading(false);
        setOpenDialog(false);
        router.push("/softSkills/interview/" + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  };
  return (
<form onSubmit={submitHandler}>
  <div>
    <small className="text-sm text-black">
      Add Details about Job Position, Your Skills and Year of Experience
    </small>

    <div className="mt-7 my-3">
      <label htmlFor="jobPosition" className="text-black font-medium">
        Job Role / Job Position
      </label>
      <Input
        id="jobPosition"
        placeholder="Ex. Full Stack Developer"
        required
        onChange={handleUpdateJobData}
        name="jobPosition"
        value={JobData.jobPosition}
      />
    </div>

    <div className="my-3">
      <label htmlFor="jobDesc" className="text-black font-medium">
        Job Description / Tech Stack (In Short)
      </label>
      <Textarea
        id="jobDesc"
        placeholder="Ex. React, Nodejs, Angular, MySql etc."
        required
        onChange={handleUpdateJobData}
        name="jobDesc"
        value={JobData.jobDesc}
      />
    </div>

    <div className="my-3">
      <label htmlFor="jobExperience" className="text-black font-medium">
        Years of Experience
      </label>
      <Input
        id="jobExperience"
        placeholder="Ex. 5"
        type="number"
        max="50"
        required
        onChange={handleUpdateJobData}
        value={JobData.jobExperience}
        name="jobExperience"
      />
    </div>

    <div className="my-3 flex flex-col">
      <label htmlFor="skillBasedOrNot" className="text-black font-medium">
        Skill Based Or Not
      </label>
      <select
        id="skillBasedOrNot"
        name="skillBasedOrNot"
        onChange={handleUpdateJobData}
        required
        value={JobData.skillBasedOrNot}
      >
        <option value="">--</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <small>
      Get prepared! Start your mock interview and refine your answers.
    </small>
  </div>

  <div className="flex gap-5 justify-end mt-3">
    <Button
      variant="ghost"
      onClick={() => {
        setOpenDialog(false);
      }}
      type="button"
    >
      Cancel
    </Button>
    <Button type="submit" disabled={loading}>
      {loading ? (
        <>
          <LoaderIcon className="animate-spin" /> Generating from AI
        </>
      ) : (
        "Start Interview"
      )}
    </Button>
  </div>
</form>
  );
}

export default JobForm;
