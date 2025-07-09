import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Mock Interview App | Practice Tech Interviews with AI",
  description:
    "Ace your next tech interview with AI-powered mock interviews. Get instant feedback, realistic questions, and personalized insights to boost your confidence.",
  keywords: [
    "AI mock interview",
    "tech interview practice",
    "interview preparation",
    "software engineer interview",
    "frontend interview questions",
    "AI interview feedback",
    "mock interview app",
    "next.js interview tool",
  ],
  authors: [
    {
      name: "Sonia Sharma",
      url: "https://ai-mock-interview-sonia-sharmas-projects.vercel.app",
    },
  ],
  // creator: "AI Mock Interview Team",
  // publisher: "AI Mock Interview",
  // robots: "index, follow",
  // viewport: "width=device-width, initial-scale=1",
  // themeColor: "#0f172a",
  // openGraph: {
  //   title: "AI Mock Interview App | Practice Tech Interviews with AI",
  //   description: "Simulate real tech interviews with AI. Improve your skills with tailored questions and feedback.",
  //   url: "https://ai-mock-interview-sonia-sharmas-projects.vercel.app",
  //   siteName: "AI Mock Interview",
  //   images: [
  //     {
  //       url: "https://ai-mock-interview-sonia-sharmas-projects.vercel.app/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "AI Mock Interview App Preview"
  //     }
  //   ],
  //   type: "website"
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "AI Mock Interview App",
  //   description: "Practice coding interviews with AI. Get feedback, improve, and land your dream job.",
  //   creator: "@yourTwitterHandle",
  //   images: ["https://ai-mock-interview-sonia-sharmas-projects.vercel.app/og-image.png"]
  // }
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
