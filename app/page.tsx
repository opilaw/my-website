import Image from "next/image"
import portrait from '@/public/portrait.png'


export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-between p-24">
     <>
      <div className="container mx-auto px-4">
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
      <div>
        <Image src={portrait} alt="olga.pilawka" width={1000}
      height={1000}></Image>
      </div>
    </>
    </main>
  )
}
