"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const slides = [
  {
    title: "H4CK3R PR3S3NT4T10N",
    content: "C0D3N4M3: {Y0UR_N4M3}\nR0L3: M4ST3R H4CK3R\nT1M3ST4MP: {D4T3}",
  },
  {
    title: "1NTR0DUCT10N",
    content: "• M1SS10N BR13F1NG\n• THR34T L4NDSC4P3\n• 0P3R4T10N 0V3RV13W",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "V3CT0R 1",
    content: "• S0C14L 3NG1N33R1NG\n• PH1SH1NG C4MP41GNS\n• S0C14L M3D14 3XPL01T4T10N",
  },
  {
    title: "V3CT0R 2",
    content: "• M4LW4R3 D3PL0YM3NT\n• R4NS0MW4R3 STR4T3G13S\n• ST34LTH T3CHN1QU3S",
  },
  {
    title: "V3CT0R 3",
    content: "• N3TW0RK 1NFR4STRUCTUR3\n• F1R3W4LL BY4P4SS\n• 1NTR4N3T 3XPL01T4T10N",
  },
  {
    title: "V3CT0R 4",
    content: "• CR3D3NT14L H4RV3ST1NG\n• P4SSW0RD CR4CK1NG\n• PR1V1L3G3 3SC4L4T10N",
  },
  {
    title: "V3CT0R 5",
    content: "• D4T4 3XF1LTR4T10N\n• C0V3RT CH4NN3LS\n• 3NCR4YPT10N M3TH0DS",
  },
  {
    title: "V3CT0R 6",
    content: "• P3RS1ST3NC3 M3CH4N1SMS\n• B4CKD00R 1MPL4NT4T10N\n• 4NT1-F0R3NS1CS",
  },
  {
    title: "M1SS10N D3BR13F",
    content: "• 0P3R4T10N SUMM4RY\n• CR1T1C4L 4SS3TS 4CQU1R3D\n• N3XT ST3PS",
  },
  {
    title: "3X1T STR4T3GY",
    content: "QU3ST10NS?\n\nC0NT4CT:\n3M41L: d4rk.h4ck3r@sh4d0wn3t.com\nS3CUR3 CH4NN3L: [R3D4CT3D]",
  },
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

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(generateGlitchText())
    }, 100)

    return () => clearInterval(glitchInterval)
  }, [])

  const generateGlitchText = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
    return Array(5)
      .fill(0)
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("")
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1))
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

