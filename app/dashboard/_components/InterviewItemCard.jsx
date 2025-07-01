import React from 'react'
import {Button} from "@components/ui/button"
import { useRouter } from "next/navigation";

function InterviewItemCard({interview}) {
  const router=useRouter();
  const onStart=()=>{
    router.push("/dashboard/interview/"+interview?.mockId)
  }
  const onFeedbackPress=()=>{
    router.push("/dashboard/interview/"+interview?.mockId+"/feedback")
  }
  return (
    <div className='border hover:shadow-blue-300 hover:shadow-xl shadow-lg shadow-gray-400 rounded-lg p-3 text-center sm:text-start'>
    <h2 className='font-bold text-blue-500'>{interview?.jobPosition}</h2>
    <h2 className='font-bold text-gray-600 truncate'>{interview?.jobDesc}</h2>
    <h2 className='font-bold text-gray-400'>createdAt: {interview?.createdAt}</h2>
    <div className='flex justify-end mt-2 gap-5'>
      <Button size="sm" variant="outline" onClick={onFeedbackPress} className="hover:cursor-pointer" >Feedback</Button>
      <Button size="sm" className="hover:cursor-pointer" onClick={onStart}>Start</Button>
    </div>
    </div>
  )
}

export default InterviewItemCard