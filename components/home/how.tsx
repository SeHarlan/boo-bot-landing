import { Grid, LongCross } from "@/svg/pixelElements";
import EntranceWrapper from "../EntranceWrapper";

const How = () => {
  return (
    <div id="how" className="standardContainer mb-20">
      <EntranceWrapper >
        <h2 className="text-4xl underline text-center mb-8">How Boo Bot Works</h2>
        <p className="text-lg text-center mb-20">Experience the next generation of web3 loyalty rewards - built on fairness and equality</p>
      </EntranceWrapper>
        
      <EntranceWrapper>
        <div className="flex items-start gap-4 mt-10 md:w-1/2">
          <Grid className="mt-1 flex-shrink-0" colorClass="fill-themeSkyBlue"/>
          <div>
            <h4 className="text-2xl text-themeSkyBlue">A Thriving Points Economy</h4>
            <p>Boo Bot fosters a vibrant Discord, rewarding active members and fuelling the growth of thriving, engaged communities.</p>
          </div>
        </div>
      </EntranceWrapper>
      <EntranceWrapper>
        <div className="flex justify-end">
          <div className="flex items-start gap-4 mt-10 md:w-1/2">
            <Grid className="mt-1 flex-shrink-0" colorClass="fill-themeSkyBlue" />
            <div>
              <h4 className="text-2xl text-themeSkyBlue">Unify & Grow Your Community</h4>
              <p>Boost work capacity by outsourcing bounties to your community, promoting collaboration while honing in on strategies objectives.</p>
            </div>
          </div>
        </div>
      </EntranceWrapper>
      <EntranceWrapper>
        <div className="flex items-start gap-4 mt-10 md:w-1/2">
          <Grid className="mt-1 flex-shrink-0" colorClass="fill-themeSkyBlue" />
          <div>
            <h4 className="text-2xl text-themeSkyBlue">Automated Rewards for Contributors</h4>
            <p>Effortlessly distribute on-chain tokens & NFTs with Boo Bot’s automated airdrops, ensuring every deserving community member is rewarded.</p>
          </div>
        </div>
      </EntranceWrapper>
    </div>
  )
}

export default How;