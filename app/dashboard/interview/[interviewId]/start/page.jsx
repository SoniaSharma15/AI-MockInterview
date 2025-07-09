"use client";
import React, { use, useEffect, useState } from "react";
import { db } from "../../../../../utils/db";
import { eq } from "drizzle-orm";
import { MockInterview } from "../../../../../utils/Schema";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import Link from "next/link";
import { Button } from "@components/ui/button";
function StartInterview({ params }) {
  const [interviewDetails, setInterviewDetails] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const { interviewId } = use(params);
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  //   used to get INterview Details by MockId/InterviewId
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));
    setInterviewDetails(result[0]);

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Interview Questions */}
        <QuestionSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          setActiveQuestionIndex={setActiveQuestionIndex}
        />
        {/* Video Answer Recording*/}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewDetails={interviewDetails}
        />
      </div>
      <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex <
          process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT -1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}

        <Link
          href={
            "/dashboard/interview/" + interviewDetails?.mockId + "/feedback "
          }
        >
          <Button>End Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default StartInterview;
