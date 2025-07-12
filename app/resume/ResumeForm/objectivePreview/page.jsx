"use client";
import React from "react";
import ResumeLive from "../_components/ResumeLive";
import { Button } from "/components/ui/button";
import { GoogleGenerativeAI } from "@google/generative-ai";

function page() {
  const resume = JSON.parse(sessionStorage.getItem("resume"));
  const createObjective = async () => {
    // setLoading(true);
    
    const InputPrompt =
      `All resume details:${resume} . Create a list of five job objective with the help of this details."` +
      "```json {['objective': '']}";

    //Gemini Ai Model
    const genAI = new GoogleGenerativeAI(
      "AIzaSyAryrvuYBmpC64pp4BDyJoZrKNsjtUGoDw"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(InputPrompt);
    const MockJsonResp =
      result.response.text().replace("```json", "").replace("```", "") || "{}";

    //  setJsonResponse(MockJsonResp);
    console.log(MockJsonResp);
  };

  return (
    <>
      <ResumeLive />
      <Button onClick={createObjective}>Create objective</Button>
      <Button>Submit</Button>
    </>
  );
}

export default page;
