import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="relative h-full flex items-center justify-center overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  )
}
