"use client";
import React, { useEffect, useState } from "react";
import ResumeLive from "../_components/ResumeLive";
import { Button } from "/components/ui/button";
import { GoogleGenerativeAI } from "@google/generative-ai";
import CareerObjectiveSelector from "../_components/_components/CareerObjectiveSelector"
import { useContext } from "react";
import { ResumeContext } from "../../_context/ResumeContext";
function page() {
 
//     let InputPrompt;
//     if(!resume){
//          InputPrompt =
//       `Create a list of five job objectives with the help of this details."` +"Dont leave any field for a user"+"Dont mention any other unncecssay notes or information"+
//       "```json {[]}";
//     }
//     else{
//       InputPrompt =
//         `All resume details:${JSON.stringify(resume)} . Create a list of five job objectives with the help of this details."` +"Dont mention any other unncecssay notes or information"+
//         "```json {[]}";
//     }

//     //Gemini Ai Model
//     const genAI = new GoogleGenerativeAI(
//       "AIzaSyA0_pcoPqcrlIXpax7spvsStfDTeSCP-LM"
//     );
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const result = await model.generateContent(InputPrompt);
//    const rawText = result.response.text();
// const strippedText = rawText.replace("```json", "").replace("```", "").trim();
// try {
//   const parsedObjectivess = JSON.parse(strippedText);
//   setObjectives(parsedObjectivess);  // now this is an array
//   console.log(objectives)
// } catch (err) {
//   console.error("Failed to parse JSON:", err);
//   setObjectives([]); // fallback to empty array
// }
// let storedResume = JSON.parse(sessionStorage.getItem("resume"));
// let storedSelected = JSON.parse(sessionStorage.getItem("selected"));
// console.log(storedResume,storedSelected)
   const {resume,setResume } = useContext(ResumeContext);
console.log(resume)
    return (
    <>
      <ResumeLive></ResumeLive>
        </>
  );
}

export default page;
