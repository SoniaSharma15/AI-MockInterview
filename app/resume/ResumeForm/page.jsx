"use client";
import React, { useEffect, useState } from "react";
import Form from "./_components/Form";
import ResumeLive from "./_components/ResumeLive";


function ResumeForm() {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <Form/>
      <ResumeLive />
    </div>
  );
}

export default ResumeForm;
