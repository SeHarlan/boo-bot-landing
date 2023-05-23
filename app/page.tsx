import CTAButton from '@/components/CTAButton'
import EntranceWrapper from '@/components/EntranceWrapper'
import FAQ from '@/components/home/faq'
import Hero from '@/components/home/hero'
import How from '@/components/home/how'
import Testimonials from '@/components/home/testimonials'
import TierTable from '@/components/home/tierTable'

export default function Home() {
  return (
    <main className='pb-36'>
      <Hero />
      <How />
      <TierTable />
      <Testimonials />
      <EntranceWrapper className='standardContainer flex justify-center mb-20'>
        <div className='border-y-2 p-6 border-themePink flex flex-col justify-center items-center gap-8'>
          <h3 className='font-bold text-3xl text-center'>Discover the Future of Community Building Today</h3>
          <CTAButton />
        </div>
      </EntranceWrapper>
      <FAQ />
      {/* <div className='h-screen' /> */}
    </main>
  )
}
