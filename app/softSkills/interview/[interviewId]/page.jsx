"use client"
import React, { use, useEffect, useState } from 'react'
import { db } from '../../../../utils/db'
import { MockInterview, softSkillsMockInterview } from '../../../../utils/Schema'
import { eq } from 'drizzle-orm'
import Webcam from 'react-webcam'
import { WebcamIcon } from 'lucide-react'
import {Button} from "@components/ui/button"
import { Lightbulb } from 'lucide-react'
import Link from 'next/link'

function Interview({params}) {
    const [interviewDetails,setInterviewDetails]=useState()
     const { interviewId } = use(params);
    const [webCamEnabled,setWebCamEnabled]=useState();
    useEffect(() => {
        GetInterviewDetails();
  }, [])
    

//   used to get INterview Details by MockId/InterviewId
    const GetInterviewDetails=async()=>{
        const result=await db.select().from(softSkillsMockInterview).where(eq(softSkillsMockInterview.mockId,interviewId))
        setInterviewDetails(result[0])
      }
  return (
    <div className='my-10'>
<h2 className='font-bold text-2xl'>Let's Get Started</h2>

<div className='grid grid-cols-1 md:grid-cols-2 md:gap-15'>
<div className='flex flex-col my-5 gap-5 '>
  {/* Data */}
  <div className='flex flex-col p-5 rounded-lg border'>
<h2 className='text-lg '><strong>Job Role / Job Position :</strong>{interviewDetails?.jobPosition}</h2>
<h2 className='text-lg'><strong>Job Description :</strong>{interviewDetails?.jobDesc}</h2>
<h2 className='text-lg'><strong>Job Experience :</strong>{interviewDetails?.jobExperience}</h2>
  </div>
  <div className='rounded-md border-yellow-300 p-5 bg-yellow-100'>
    <h2 className='flex gap-2 text-xl items-center text-yellow-500'>
<Lightbulb/>
<strong>Information</strong>
    </h2>
    <h2 className='mt-10 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
  </div>

</div>
 <center className='mt-1 md:mt-20'>  
    {/* Webcam */}
   {webCamEnabled?<Webcam
   onUserMedia={()=>setWebCamEnabled(true)}
    onUserMediaError={()=>setWebCamEnabled(false)}
    mirrored={true}
    style={{
        height:300,
        width:400,
        borderRadius: 20,
        boxShadow: "0 4px 12px rgba(230, 220, 10, 0.3)"

   }}
   />:<>
      <WebcamIcon className='h-78 my-10 w-full p-20 bg-secondary rounded-lg border'/>
      <Button className="hover:cursor-pointer  w-full" variant="destructive"  onClick={()=>setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
   </> 
   }
</center>

 </div>
<div className='flex justify-center items-end my-5'>
  <Link href={interviewId+'/start'}> <Button>Start Interview</Button>
</Link>
</div>

    </div>
  )
}

export default Interview