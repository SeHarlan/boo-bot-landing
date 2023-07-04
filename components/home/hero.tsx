import { HollowCross } from "@/svg/pixelElements"
import CTAButton from "../CTAButton"
import EntranceWrapper, { enteredTransClass } from "../EntranceWrapper"

const Hero = () => {
  const titleText = "Discover The Future of Web3 Communities"
  return (
    <div id="landing" className="standardContainer min-h-screen flex flex-col items-center justify-center gap-6 text-center mb-20">
      <EntranceWrapper skipMountingScroll initTransClass={enteredTransClass}>
        <h1 className='text-5xl/[4rem] mb-6' data-text={titleText}>{titleText}</h1>
        <p className='text-lg'>Automate rewards, boost engagement, and foster collaboration using Boobot</p>        
      </EntranceWrapper>
      <EntranceWrapper  skipMountingScroll initTransClass={enteredTransClass} className="mx-auto pt-2 md:pt-12">

        <CTAButton />
        <div className=" 
        relative md:top-48 top-14
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
    </div>
  )
}

export default Hero