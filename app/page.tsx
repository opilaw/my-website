import Image from "next/image"
import portrait from '@/public/portrait.png'
import { motion } from "framer-motion"
import Portrait from "./components/portrait"
import vector from '@/public/vector.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row 2xl:flex-row items-center justify-between p-24">
     <>
      <div className=" mx-auto px-4">
        <h1>Hello world</h1>
        <p>I am Olga Pilawka</p>
        <p>I am full time frontend developer and part time painter </p>
        
        <p>
          Here you can find all of my professional history and achievements
        </p>
        <h1>
          ENJOY! 
        </h1>
      </div>
     
        {/* <Image src={portrait} alt="olga.pilawka" width={1000}
      height={1000}></Image> */}
    
   <Portrait></Portrait>
  <div className="mx-auto px-4">
    <h1>I am graduated from Aalborg University in Copenhagen</h1>
    <p>I hold MSc in IT in Information Studies major, with Web Development Specialization</p>
    <p>In my free time besides learning new things, I paint. You can see my best works on this website</p>
  </div>
    </>
    </main>
  )
}
