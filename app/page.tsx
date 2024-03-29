import CTAButton from '@/components/CTAButton'
import EntranceWrapper from '@/components/EntranceWrapper'
import FAQ from '@/components/home/faq'
import Hero from '@/components/home/hero'
import How from '@/components/home/how'
import Testimonials from '@/components/home/testimonials'
import TierTable from '@/components/home/tierTable'
import PaymentTab from '@/components/install/tabs/payment'
import { TopFiveLeaderboard } from '@/components/leaderboard/fullLeaderboard'



export default function Home() {
  return (
    <main className='pb-36'>
      <Hero />
      <EntranceWrapper className='standardContainer mb-40'>
        <h2 className="text-4xl underline text-center mb-8">Community Leaderboard</h2>
        <div className='overflow-x-auto'>
          <TopFiveLeaderboard />
        </div>
      </EntranceWrapper>
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
    </main>
  )
}

