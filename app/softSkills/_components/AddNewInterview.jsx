"use client"
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "/components/ui/dialog"
import JobForm from "./JobForm"
import { useState } from 'react';

function AddNewInterview() {
    const [openDialog,setOpenDialog]=useState(false);
   
  return (
    <div>
        <div className='border rounded-lg p-10 hover:bg-secondary hover:shadow-lg cursor-pointer transition-all' onClick={()=>{setOpenDialog(true)}}>
            <h2 className='font-semibold text-center' >+ Add New</h2>
        </div>
        <Dialog open={openDialog}> 
  <DialogContent className="max-w-xl">
    <DialogHeader>
      <DialogTitle className="text-2xl">Tell Us more about your Job Interviewing</DialogTitle>
      <DialogDescription>
           <JobForm setOpenDialog={setOpenDialog}/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddNewInterview