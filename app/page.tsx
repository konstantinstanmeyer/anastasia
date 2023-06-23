import Image from "next/image"
import { Cormorant } from "next/font/google"

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ["400"]
})

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-center">
      <div className="w-screen h-screen justify-center items-center flex flex-col" id="landing">
        <div className="w-screen relative h-3/5 flex flex-row" id="home-banner">
          <img className="mr-auto h-full w-[65%] object-cover bg-bottom" alt="anastasia-close-up" src="/random-women.jpg" />
          <div className="w-[35%] h-full flex items-center flex-col">
            <div className="h-20 w-full relative mt-auto mb-10">
              <p className={`${cormorant.variable} font-sans text-4xl absolute -left-10`}>Lorem ipsum dolor sit amet. Eos nisi Minus qui maxime esse qui.</p>
            </div>
            <p className={`${cormorant.variable} font-sans mb-auto text-lg text-black/90 ml-4 mr-4`}>
              Et assumenda omnis et tempora similique et deleniti atque eos fugit quos qui consectetur adipisci. 
              Et pariatur excepturi et ipsum earum vel voluptates doloribus id culpa laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
