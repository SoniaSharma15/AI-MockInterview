import React from 'react'
import AddNewResume from "./_components/AddNewResume"
function Dashboard() {
  return (
    <div className='p-10'>
     <h2 className='font-semibold'> Start Making  Your  <span className='text-red-700'>
     Resume</span></h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
      <AddNewResume/>
     </div>
    
          
    </div>
  )
}

export default Dashboard