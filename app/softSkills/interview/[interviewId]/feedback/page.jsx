"use client";
import React, { use, useEffect, useState } from "react";
import { softSkillsUserAnswer, UserAnswer } from "../../../../../utils/Schema";
import { db } from "../../../../../utils/db";
import { eq } from "drizzle-orm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "/components/ui/collapsible";
import { ChevronDownCircle } from "lucide-react";
import {Button} from "@components/ui/button"
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const { interviewId } = use(params);
  const [feedbackList, setFeedbackList] = useState([]);
  const router=useRouter()

  useEffect(() => {
    GetFeedback();
  }, [feedbackList]);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(softSkillsUserAnswer)
      .where(eq(softSkillsUserAnswer.mockIdRef, interviewId))
      .orderBy(softSkillsUserAnswer.id);
    setFeedbackList(result);
  };
   console.log(feedbackList)


  return (
    <div className="p-10">
    
      {feedbackList?.length==0? 
      <h2 className="text-3xl font-bold text-gray-500 my-10">No Interview Record Found</h2>:<>
        <h2 className="text-2xl font-bold text-green-600">Congratulation!</h2>
      <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
      {/* <h2 className="text-lg my-3 font-medium">
        Your overall interview rating:<strong>8/10</strong>
      </h2> */}

      <h2 className="text-sm text-gray-500 ">
        Find below interview question with correct answer, Your answer feedback
        for improvement.
      </h2>
      {feedbackList &&
        feedbackList.map((item, index) => {
          return (
            <Collapsible key={index}>
              <CollapsibleTrigger className="p-2 bg-secondary  rounded-t-xl mt-5 text-left shadow-sm flex justify-between gap-7 border border-green-200 w-[100%] ">
                {item.question} <ChevronDownCircle />
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-gray-100 rounded-b-xl p-3 border border-green-200 ">
                <div className="flex flex-col gap-5">
                  <h2 className="text-red-500 p-2 border rounded-lg w-25  bg-gray-200 text-center">
                    <strong>Rating: </strong>
                    {item.rating}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-red-200 text-sm text-red-900">
                    <strong>Your Answer: </strong>
                    {item.userAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-green-100 text-sm text-green-900">
                    <strong>Correct Answer: </strong>
                    {item.correctAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-blue-100 text-sm text-blue-900">
                    <strong>Feedback: </strong>
                    {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </>

    }
      
        <Button className="p-4 my-4 bg-blue-500 text-white  shadow-blue-900  hover:bg-blue-900" onClick={()=>router.replace("/dashboard")}>Go to Home Page</Button>
    </div>
  );
}

export default Feedback;
