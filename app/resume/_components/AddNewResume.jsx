"use client"
import React from "react";
import { usePathname, useRouter } from "next/navigation";
function AddNewResume() {
  const router =useRouter()
  const pathname = usePathname();

  return (
    <>
        <div className='border rounded-lg p-10 hover:bg-secondary hover:shadow-lg cursor-pointer transition-all' onClick={() => router.push('resume/ResumeForm')}>
            <h2 className='font-semibold text-center' >+ Add New</h2>
        </div>
    </>
  )
}

export default AddNewResume