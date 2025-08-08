"use client"
import { db } from "../../../utils/db";
import { softSkillsMockInterview } from "../../../utils/Schema"
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useState,useEffect } from 'react'
import InterviewItemCard from "./InterviewItemCard"

function InterviewList() {
    const {user}=useUser();
    const [interviewList,setInterviewList]=useState([])

    useEffect(() => {
      user && GetInterviewList();
    }, [user])
    
    const GetInterviewList=async()=>{
        const result=await db.select()
        .from(softSkillsMockInterview)
        .where(eq(softSkillsMockInterview.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(softSkillsMockInterview.id))
        setInterviewList(result)
    }
  return (
    <div>
 <h2 className='font-medium text-xl mb-3'>Previous Mock Interview</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {interviewList.length!=0? interviewList.map((interview,index)=>{
         return <InterviewItemCard
         interview={interview}
         key={index}/>
    }):
    <h2 className="my-3 font-medium font-sans text-gray-700">
      No Mock Interview has been Given Yet !
    </h2>}
</div>
    </div>
  )
}

export default InterviewList