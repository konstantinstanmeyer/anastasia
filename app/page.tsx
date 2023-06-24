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
      <div className="w-[90%] mx-auto h-screen justify-center items-center flex flex-col relative" id="landing">
        <div className="w-full relative h-3/5 flex flex-row" id="home-banner">
          <img className="mr-auto absolute h-full w-[65%] object-cover bg-bottom" alt="anastasia-close-up" src="/random-women.jpg" />
          <div className="w-[35%] h-full flex items-center flex-col ml-auto mr-8">
            <div className="relative mt-auto mb-2">
              <p className={`${cormorant.variable} font-sans lg:text-4xl md:text-3xl sm:text-2xl`}>Anastasia Stanmeyer. Eos nisi Minus qui maxime esse qui.</p>
            </div>
            <p className={`${cormorant.variable} font-sans mb-auto text-lg text-black/90 ml-20 -mr-4`}>
              Et assumenda omnis et tempora similique et deleniti atque eos fugit quos qui consectetur adipisci. 
              Et pariatur excepturi et ipsum earum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
