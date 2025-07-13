import React from 'react'
import Header from '../dashboard/_components/Header'
import { ResumeProvider } from './_context/ResumeContext';

function DashboardLayout({children}) {
  return (
     <ResumeProvider>
      <Header/>
      <div className='mx-5 md:mx-20  lg:mx-20'>
      {children}
      </div>
     </ResumeProvider>
  )
}

export default DashboardLayout