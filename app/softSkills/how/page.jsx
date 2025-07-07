import Image from "next/image";
import React from "react";
function How() {
  return (
    <div className="p-2 mt-2 sm:p-5 md:grid md:grid-cols-2">
      <div className="sm:border sm:p-5 sm:shadow-2xl">
                 <h2 className=" underline decoration-dotted   font-bold font-serif text-2xl sm:px-10">
        🧭 Step-by-Step Usage Guide
      </h2>
      <ol className="list-decimal pl-6 sm:px-10 ">
        <li className="py-1 px-1 font-semibold underline decoration-dashed">Login & Access</li>

        <ul className="list-square pl-6">
          <li className="py-1 px-1">Navigate to the dashboard.</li>
          <li className="py-1 px-1">
            Sign in using your email or social login (Google, GitHub, etc.).
          </li>
          <li className="py-1 px-1">
            Once authenticated, you’ll land on your personalized dashboard.
          </li>
        </ul>

        <li className="py-1 px-1 font-semibold underline decoration-dashed">Create a New Interview</li>
        <ul className="list-square pl-6">
          <li className="py-1 px-1 ">Click “New Interview”.</li>
          <li className="py-1 px-1 font-semibold">Fill in:</li>
          <ol className="list-disc pl-6">
            <li className="py-1 px-1">Job Role (e.g.,- Backend Developer)</li>
            <li className="py-1 px-1">Job Description (paste a JD or write a brief summary)</li>
            <li className="py-1 px-1">Years of Experience</li>
          </ol>
          <li className="py-1 px-1">
            Click “Generate Questions” — Gemini AI will craft a custom set of
            questions.
          </li>
        </ul>
        <li className="py-1 px-1 font-semibold underline decoration-dashed">Start the Interview</li>
        <ul className="list-square pl-6">
          <li className="py-1 px-1">Hit “Start Interview” to begin.</li>
          <li className="py-1 px-1 font-semibold">The app will:</li>
          <ul className="list-disc pl-6 my-2">
            <li className="py-1 px-1">Display one question at a time.</li>
            <li className="py-1 px-1">Use your microphone to record your spoken answers.</li>
            <li className="py-1 px-1">Allow you to skip, repeat, or move to the next question.</li>
          </ul>
        </ul>
        <li className="py-1 px-1 font-semibold underline decoration-dashed">AI Feedback & Scoring</li>
        <ul className="list-square pl-6">
          <li className="py-1 px-1">
            After the session, the app analyzes your responses and provides:
          </li>
          <ul className="list-disc pl-6 my-2">
            <li className="py-1 px-1">Score breakdown (e.g., Communication, Technical Depth)</li>
            <li className="py-1 px-1">Suggestions for improvement</li>
            <li className="py-1 px-1">Transcript of your answers (optional)</li>
          
          </ul>
        </ul>
        <li className="py-1 px-1 font-semibold underline decoration-dashed">Dashboard Features</li>
        <ul className="list-square pl-6">
          <li className="py-1 px-1">View all past interviews in a timeline-style list.</li>
          <li className="py-1 px-1 font-semibold">Click any session to:</li>
          <ul className="list-disc pl-6 my-2">
            <li className="py-1 px-1">Review feedback</li>
            <li className="py-1 px-1">Retake the same interview</li>
            <li className="py-1 px-1">Compare progress over time</li>
          </ul>
        </ul>
      </ol>

            </div>

<div className="sm:p-5 sm:border sm:shadow-2xl">
 <div className="my-5">
        <Image alt='Ai' src={"/ai2.jpg"} width={500} height={300} style={{ borderRadius: '70px' }} className="sm:px-16 "/>
      </div>
              <h2 className=" underline decoration-dotted   my-2  font-bold font-serif text-2xl sm:px-16"> Tips</h2>
      <ul className="list-disc pl-6 ">
        <li className="py-1 px-1">
          Use a quiet environment and a good mic for best voice recognition.
        </li>
        <li className="py-1 px-1">Try different job roles to broaden your prep.</li>
        <li className="py-1 px-1">
          Use the feedback to refine your STAR method or technical explanations.
        </li>
      </ul>
       <div className="my-5">
        <Image alt='Ai' src={"/ai.jpg"} width={500} height={300} style={{ borderRadius: '70px' }} className="sm:px-16 "/>
      </div>
         <h2 className=" underline decoration-dotted mt-5 mb-2 font-bold font-serif text-2xl sm:px-16"> Tech Stack Behind the Scenes
      </h2>
      <ul className="list-disc pl-6 my-2" >
        <li className="py-1 px-1"><span className="font-semibold ">
        Frontend: </span>
          Built with Next.js and React for a fast, responsive UI.
        </li>
        <li className="py-1 px-1"><span className="font-semibold ">
       Authentication: </span>
           Uses Clerk for secure login and user management.
        </li>
        <li className="py-1 px-1"><span className="font-semibold ">
       AI Engine:  </span>
           Powered by Gemini AI, which tailors questions based on your
          input.
        </li>
        <li className="py-1 px-1">
          <span className="font-semibold ">
         Database:</span>
          Uses Drizzle ORM with PostgreSQL to store interviews and
          feedback.
        </li>
        <li className="py-1 px-1"><span className="font-semibold ">
        Deployment:  </span> Hosted on Vercel for seamless performance.</li>
      </ul>
     
</div>
     
     
    </div>
  );
}

export default How;
