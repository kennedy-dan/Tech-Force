import Image from 'next/image'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import LogoAnimation from '@/components/LogoAnimation'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <Layout className=''>
      <Hero />
      <LogoAnimation />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
    </Layout>
  )
}
