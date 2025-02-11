"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const slides = [
  {
    title: "CodePromptFu.com",
    content: "A prompt engineering resource for next generation programmers\n\
    Presenter: Debamitro Chakraborti (@debamitro)\n\
    Date: February 2 2025",
  },
  {
    title: "1NTR0DUCT10N",
    content: "• Prompt engineering is becoming a legit way of building software and writing code"
  },
  {
    title: "1NTR0DUCT10N",
    content: "• Prompt engineering is becoming a legit way of building software and writing code\n\
    • Initially people were using the LLMs directly for generating code."
  },
  {
    title: "1NTR0DUCT10N",
    content: "• Prompt engineering is becoming a legit way of building software and writing code\n\
    • Initially people were using the LLMs directly for generating code.\n\
    • Then came the ‘agentic’ AI coding tools like Cursor, Bolt, v0, Aider, Windsurf etc."
  },
  {
    title: "1NTR0DUCT10N",
    content: "• Prompt engineering is becoming a legit way of building software and writing code\n\
    • Initially people were using the LLMs directly for generating code.\n\
    • Then came the ‘agentic’ AI coding tools like Cursor, Bolt, v0, Aider, Windsurf etc.\n\
    • Coding prompts are becoming more concise and more powerful"
  },
  {
    title: "TH3 N33D",
    content: "• There are 30 million programmers in the world\n\
    • How will they move to the new way of programming using AI tools?",
  },
  {
    title: "TH3 N33D",
    content: "• There are 30 million programmers in the world\n\
    • How will they move to the new way of programming using AI tools?\n\
    • We need to create human-curated resources for the next generation of programmers",
  },
  {
    title: "TH3 1D3A",
    content: "• CodePromptFu.com is a website where concise ‘ninja’ prompts are collected, upvoted and downvoted by humans",
  },
  {
    title: "5TATU5",
    content: "• Initial prototype went live as part of EveryDAIS\n\
    • Working on growing the community that uses this",
  },
  {
    title: "C0MP3T1T0R5",
    content: "• https://taskcade.com \n\
    • https://cursor.directory\n\
    • https://windsurf.directory",
  },
  {
    title: "U5P",
    content: "• Not specific to one AI coding tool\n\
    • Focused on concise prompts that achieve maximum effect\n\
    • Goal is to come out with useful 'ninja' moves that can be combined to achieve bigger tasks"
  },
  {
    title: "THANK5",
    content: "• To the Sundai.club/EveryDAI community\n\
    • Keep watching https://www.codepromptfu.com",
  }
]

const asciiArt = `
  _    _          _____ _  ________ _____  
 | |  | |   /\\   / ____| |/ /  ____|  __ \\ 
 | |__| |  /  \\ | |    | ' /| |__  | |__) |
 |  __  | / /\\ \\| |    |  < |  __| |  _  / 
 | |  | |/ ____ \\ |____| . \\| |____| | \\ \\ 
 |_|  |_/_/    \\_\\_____|_|\\_\\______|_|  \\_\\
`

export default function HackerPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [glitchText, setGlitchText] = useState("")

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1))
  }, [])

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(generateGlitchText())
    }, 100)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide()
      } else if (event.key === "ArrowLeft") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      clearInterval(glitchInterval)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [nextSlide, prevSlide])

  const generateGlitchText = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
    return Array(5)
      .fill(0)
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <Card className="w-full max-w-3xl aspect-video shadow-xl bg-gray-900 border-green-500 border-2">
        <CardContent className="flex flex-col justify-between h-full p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <pre className="text-green-500 text-xs">{asciiArt}</pre>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-green-500 relative">
            {slides[currentSlide].title}
            <span className="absolute top-0 right-0 text-xs text-green-300">{glitchText}</span>
          </h2>
          <div className="flex-grow flex flex-col">
            {slides[currentSlide].image && (
              <div className="mb-4 flex justify-center">
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt="Slide illustration"
                  width={400}
                  height={200}
                  className="rounded border border-green-500"
                />
              </div>
            )}
            <div>
              {slides[currentSlide].content.split("\n").map((line, index) => (
                <p key={index} className="mb-2 text-green-400 font-mono">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> PR3V10US
            </Button>
            <span className="text-sm text-green-300 font-mono">
              SL1D3 {currentSlide + 1} 0F {slides.length}
            </span>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            >
              N3XT <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

