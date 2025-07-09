"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Webcam from "react-webcam";
import {Button} from "@components/ui/button"
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "react-toastify";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "../../../../../../utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { softSkillsUserAnswer } from "../../../../../../utils/Schema";

function RecordAnswerSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewDetails,
}) {
  const { user } = useUser();
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults

  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) updateUserAnswer();
  }, [userAnswer]);

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  const StartStopRecording = async () => {
    if (isRecording) stopSpeechToText();
    else startSpeechToText();
  };

  const updateUserAnswer = async () => {
    setLoading(true);

    const feedbackPrompt =
      "Question:" +
      mockInterviewQuestion[activeQuestionIndex]?.question +
      "User Answer:" +
      userAnswer +
      ",Depends on question and user answer for give interview question . Please give us rating for answer and feedback as area of improvement if any" +
      "in just 3-5 lines to improve it in JSON format with rating field and feedback field"+
      "Rating must be out of 10 ,for ex:8"+
      "don't go for exact match of answer but for relevant answer";

    //Gemini Ai Model
    const genAI = new GoogleGenerativeAI(
      "AIzaSyAryrvuYBmpC64pp4BDyJoZrKNsjtUGoDw"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(feedbackPrompt);
    const MockJsonResp =
      result.response.text().replace("```json", "").replace("```", "") || "{}";
      const jsonFeedbackResp = JSON.parse(MockJsonResp);
    const resp = await db.insert(softSkillsUserAnswer).values({
      mockIdRef: interviewDetails?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex].question,
      correctAns: mockInterviewQuestion[activeQuestionIndex].answer,
      userAns: userAnswer,
      feedback: jsonFeedbackResp?.feedback,
      rating: jsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-yyyy"),
    });
    if (resp) {
      toast("User Answer Recorded Successfully");
      setUserAnswer("");
          setResults([])

    }
    setResults([])
    setLoading(false)
  };
console.log(userAnswer)
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center bg-black rounded-3xl p-5 md:my-10">
        <Image
          alt="WebCam"
          src={"/webcam.webp"}
          width={300}
          height={300}
          className="absolute"
          priority={false}
        />
        <Webcam
          mirrored={true}
          style={{
            height: "300",
            width: "100%",
            borderRadius:20,
            zIndex: 10,
          }}
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Button
          variant="outline"
          className={`my-10  hover:cursor-pointer  w-50 ${
            isRecording && "text-red-600"
          }`}
          onClick={StartStopRecording}
        >
          {isRecording ? (
            <div className="flex justify-center items-center">
              <span>
                <Mic />
              </span>
              <span> Stop Recording...</span>
            </div>
          ) : (
            " Record Answer"
          )}
        </Button>
        {/* <Button className="w-50" onClick={()=>console.log(userAnswer)}>Show User Answer</Button> */}
      </div>
    </div>
  );
}

export default RecordAnswerSection;
