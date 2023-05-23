import { HollowCross } from "@/svg/pixelElements"
import CTAButton from "../CTAButton"
import EntranceWrapper, { enteredTransClass } from "../EntranceWrapper"

const Hero = () => {
  const titleText = "Discover The Future of Web3 Communities"
  return (
    <EntranceWrapper id="landing" skipMountingScroll initTransClass={enteredTransClass} className="standardContainer min-h-screen flex flex-col items-center justify-center gap-6 text-center mb-20">
      <h1 className='text-5xl/[4rem]' data-text={titleText}>{titleText}</h1>
      <p className='text-lg'>Automate rewards, boost engagement, and foster collaboration using Boo Bot</p>
      <div
        className="flex items-center gap-10 mt-2 md:mt-8"
      >
        <CTAButton />
      </div>
    
      <div className=" 
      absolute bottom-0 mb-10 
      flex flex-col
      md:flex-row md:gap-5
      items-center gap-1 font-bold
      ">
        <HollowCross className="hidden md:inline" colorClass='fill-themeSkyBlue' />
        <p>Winner of Solana Sandstorm Hackathon</p>
        <HollowCross colorClass='fill-themeSkyBlue' />
        <p>Grizzlython Demo Day Shortlister</p>
        <HollowCross className="hidden md:inline" colorClass='fill-themeSkyBlue' />
      </div>
    </EntranceWrapper>
  )
}

export default Hero