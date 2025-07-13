import Header from "./dashboard/_components/Header";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col p-5 md:p-20 justify-center items-center text-justify">
        <h2 className="font-sans">
          <strong className="text-xl text-blue-500">
            Welcome to Your Career Launchpad
          </strong>
          — a dynamic platform built to sharpen your edge in today’s competitive
          job market. Whether you're gearing up for your next big opportunity or
          building your professional brand from the ground up, we've got you
          covered. Our tailored Mock Interview Simulator aligns with your unique
          skills and experience to give you realistic, constructive interview
          practice. And when it’s time to present your best self on paper, our
          intelligent Resume Builder helps you craft polished, ATS-ready resumes
          that truly reflect your strengths. Let’s turn potential into
          performance, together.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 place-items-center">
          <Link href={"/dashboard"}>
            <div className="w-75 md:w-100 border-3 rounded-2xl shadow-2xl hover:shadow-purple-400 p-5 text-2xl font-bold border-l-amber-400 border-r-red-500 border-t-green-600 border-b-purple-700 text-center">
              Go with <span className="text-red-600">Technical Interview</span> Session
              <center className="font-bold mt-3 hover:text-purple-600">
                <PlusCircle />
              </center>
            </div>
          </Link>
          <Link href={"/softSkills"}>
            <div className="w-75 md:w-100 border-3 rounded-2xl shadow-2xl hover:shadow-purple-400 p-5 text-2xl font-bold border-l-amber-400 border-r-red-500 border-t-green-600 border-b-purple-700 text-center">
              Go with <span className="text-red-600">Soft Skills Interview</span> Session
              <center className="font-bold mt-3 hover:text-purple-600">
                <PlusCircle />
              </center>
            </div>
          </Link>
          {/* <Link href={"/resume"}>
            <div className="w-75 md:w-100 border-3 rounded-2xl shadow-2xl hover:shadow-purple-400 p-5 text-2xl font-bold border-l-amber-400 border-r-red-500 border-t-green-600 border-b-purple-700 text-center">
              Go with <span className="text-red-600">Resume</span> Maker
              <center className="font-bold mt-3 hover:text-purple-600">
                <PlusCircle />
              </center>
            </div>
          </Link> */}
        </div>
      </div>
    </>
  );
}
