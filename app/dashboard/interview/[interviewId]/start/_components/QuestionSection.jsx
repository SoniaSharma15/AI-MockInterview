"use client"
import React, { useEffect } from "react";
import { Lightbulb,Volume2 } from 'lucide-react'
function QuestionSection({ mockInterviewQuestion,activeQuestionIndex,setActiveQuestionIndex}) {

const textToSpeach=(text)=>{
     if('speechSynthesis' in window){
      const speech=new SpeechSynthesisUtterance(text)
      window.speechSynthesis.speak(speech)
     }
     else{
      alert('Sorry , your browser does not support text to speech')
     }
}
useEffect(() => {
  if (
    Array.isArray(mockInterviewQuestion) &&
    mockInterviewQuestion.length > 0 &&
    mockInterviewQuestion[activeQuestionIndex]?.question
  ) {
    textToSpeach(mockInterviewQuestion[activeQuestionIndex].question);
  }
}, [mockInterviewQuestion, activeQuestionIndex]);
  return mockInterviewQuestion && (
    <div className="p-5 border rounded-lg mt-10 md:my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion?.map((question, index) => {
              return <h2 className={`rounded-full p-2  text-xs md:text-sm text-center hover:cursor-pointer
                 ${activeQuestionIndex==index && ' font-bold text-white bg-blue-700'}`} key={index}onClick={()=>setActiveQuestionIndex(index)}>Question #{index + 1} </h2>;
            })}

      </div>
            <h2 className="my-5 text-sm md:text-lg">{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
            <Volume2 className="cursor-pointer my-3" onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}/>


      <div className="border rounded-lg p-5 bg-blue-100 text-blue-700">
        <h2 className="flex gap-2">
          <Lightbulb/>
          <strong>NOTE : </strong>
        </h2>
        <h2 className="text-sm text-blue-600 my-2">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE}
        </h2>
        
      </div>
    </div>
  );
}

export default QuestionSection;
