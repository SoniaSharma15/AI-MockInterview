"use client"
import React from 'react'
import { Input } from "/components/ui/input"
import {Textarea} from "/components/ui/textarea"
import {Button} from "/components/ui/Button"
import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { LoaderIcon } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';
import {db} from "../../../utils/db";
import { MockInterview } from '../../../utils/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'

function JobForm({setOpenDialog}) {
  const router=useRouter();
  const [loading,setLoading]=useState(false);
  const[jsonResponse,setJsonResponse]=useState([]);
  const {user}=useUser();
     const [JobData,setJobData]=useState({
      jobPosition:"",
      jobDesc:"",
      jobExperience:""
    })
    let name,value;

    const handleUpdateJobData =async (e) => {
            name=e.target.name;
      value=e.target.value;
      setJobData({...JobData,[name]:value});
};

const submitHandler=async(e)=>{
  setLoading(true);
          e.preventDefault();
  const InputPrompt=`Job Position:${JobData.jobPosition} , Job Description:${JobData.jobDesc}, Job Experience:${JobData.jobExperience} .Provide ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview question with answer on the basis of above provided information in JSON format .Provide easy questions and in simple language.Output Format must be like this only:`+"```json {[    {      'question': '',      'answer': ''    }  ]}"

  //Gemini Ai Model
const genAI = new GoogleGenerativeAI("AIzaSyAryrvuYBmpC64pp4BDyJoZrKNsjtUGoDw");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const result = await model.generateContent(InputPrompt);
const MockJsonResp=(result.response.text()).replace('```json','').replace('```','') || '{}'

setJsonResponse(MockJsonResp)

if(MockJsonResp){
const resp=await db.insert(MockInterview).values(
  {
    mockId:uuidv4(), //⇨9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  jsonMockResp:MockJsonResp,
  jobPosition:JobData.jobPosition,
  jobDesc:JobData.jobDesc,
  jobExperience:JobData.jobExperience ,createdBy:user?.primaryEmailAddress?.emailAddress,
  createdAt:moment().format("DD-MM-yyyy") 
  }
).returning({mockId:MockInterview.mockId})
if(resp) {
  setLoading(false);
  setOpenDialog(false)
  router.push("/dashboard/interview/"+resp[0]?.mockId)
}
}
else{
  console.log("ERROR")
}
setLoading(false)
}
  return (
          <form onSubmit={submitHandler}>
        <div>
        <h2 className='text-sm text-black'> Add Details about Job Position , Your Skills and year of Experience</h2>

        <div className='mt-7 my-3'>
          <label htmlFor="position" className='text-black font-medium'>Job Role / Job Position</label>
          <Input placeholder="Ex. Full Stack Developer" required onChange={handleUpdateJobData} name="jobPosition" value={JobData.jobPosition}/>
        </div>
        <div className=' my-3'>
          <label htmlFor="skills" className='text-black font-medium'>Job Description / Tech Stack (In Short)</label>
          <Textarea placeholder="Ex. React, Nodejs , Angular , MySql etc." required onChange={handleUpdateJobData} name="jobDesc" value={JobData.jobDesc}/>
        </div>
        <div className=' my-3'>
          <label htmlFor="experience" className='text-black font-medium'>Years of Experience </label>
          <Input placeholder="Ex. 5" type="number" max="50" required onChange={handleUpdateJobData} value={JobData.jobExperience} name="jobExperience"/>
        </div>
         <small>
          Get prepared! Start your mock interview and refine your answers.
          </small>
        </div>
        <div className='flex gap-5 justify-end mt-3'>
      <Button variant="ghost" onClick={()=>{setOpenDialog(false)}} type="button">Cancel</Button>
      <Button type="submit"disabled={loading}>
        {loading ? <>
          <LoaderIcon className='animate-spin'/> Generating from AI
        </>
          :"Start Interview"}
        </Button>
        </div>
                </form>
  )
}

export default JobForm