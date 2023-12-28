import Image from "next/image"
import portrait from '@/public/portrait.png'
import { motion } from "framer-motion"
import Portrait from "./components/portrait"
import Ornament from './components/ornament'
import linkedin from '@/public/linkedin.png'
import medium from '@/public/medium.png'
import instagram from '@/public/instagram.png'
import tiktok from '@/public/tiktok.png'
import Doodle from "./components/doodle"
import Doodle2 from "./components/doodle2"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row 2xl:flex-row items-center justify-between p-4 2xl:p-24">
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
  <div className="mx-auto px-4 ">
    <h1>I am graduated from Aalborg University in Copenhagen</h1>
    <p>I hold MSc in IT in Information Studies major, with Web Development Specialization</p>
    <p>I have a lot of experience in research field, since for many years I was working as a researcher at the Aalborg University, which outcome can be seen in many scientific publication in fore example IEEE</p>
  </div>
  <div className="mx-auto px-4 pt-6">
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
    <Image src={linkedin} alt="olga pilawka linkedin" width={50} height={50}></Image>
    <Image src={medium} alt="olga pilawka medium" width={50} height={50}></Image>
    <Image src={instagram} alt="olga pilawka instagram" width={50} height={50}></Image>
    <Image src={tiktok} alt="olga pilawka tiktok" width={50} height={50}></Image>
    <div>
      
    </div>
    </div>
    
  </div>
  <Ornament></Ornament>
  <div className="mx-auto px-4 ">
    <h1>I am graduated from Aalborg University in Copenhagen</h1>
    
    <p>In my free time besides learning new things, I paint. You can see my best works on this website</p>
  </div>
 
  <Doodle></Doodle>
  <div className="mx-auto px-4 ">
    <h1>Currently I am working at Innovation Studio department in Munich</h1>
    
    <p>So far in my carrier I was mostly working with AI technology</p>
    <p>at IBM I was working with AI dashboard which tracks if certain parts of automotive were place correctly. The tech stack included: VueJS, RxJS, JEST and Docker. 
    </p>
    <p>and my most recent project is to create the Use Cases for various IBM products, which includes mostly Watson Orchestrate Technology. The tech stack included: ReactJS, NextJS, IBM scripting language and Docker. I am working also a lot with REST API</p>
  </div>
  <Doodle2></Doodle2>
  <div className="mx-auto px-4">
    <h1 className="pb-4">Overall my tech stack includes:</h1>
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
    <div>
      <span>HTML, CSS</span>
    </div>
    <div>
      <span>JavaScript</span>
    </div>
    <div>
      <span>Typescript</span>
    </div>
    <div>
      <span>ReactJS</span>
    </div>
    <div>
      <span>NextJS</span>
    </div>
    <div>
      <span>JEST</span>
    </div>
    <div>
      <span>REST API</span>
    </div>
    <div>
      <span>GITHUB, GITLAB</span>
    </div>
    <div>
      <span>VueJS</span>
    </div>
    <div>
      <span>Vitest</span>
    </div>
    <div>
      <span>Framer Motion</span>
    </div>
    </div>
  </div>
    </>
    </main>
  )
}
