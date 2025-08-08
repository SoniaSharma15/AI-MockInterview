import React from 'react'
import AddNewInterview from "./_components/AddNewInterview"
import InterviewList from "../dashboard/_components/InterviewList"
function Dashboard() {
  return (
    <div className='p-4 md:p-10'>
      <h2 className='font-bold text-2xl text-gray-800'>Dashboard</h2>

    <h2 className='font-semibold'>Create and Start Your  <span className='text-red-700'>
     AI Mock Interview</span></h2>

     <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
      <AddNewInterview/>
     </div>
     {/* Previous Interview List */}
           <InterviewList/>
          
    </div>
  )
}

export default Dashboard