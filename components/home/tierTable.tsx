import { Check, Close } from "@/svg/basic"
import clsx from "clsx"
import { FC, ReactNode } from "react"


const TierTable = ({
  gridClassName = "max-w-screen-lg my-20 mx-auto rounded-md bg-themeBlack/90",
  wrapperClassName = "standardContainer overflow-auto"
}) => {
  return (
    <div id="tierTable" className={wrapperClassName}>

      <div className={clsx(
          "grid grid-cols-[10rem_1fr_1fr_1fr] gap-y-3",
          gridClassName
        )}  
      >
        <div />
        <TableHeader pos="left">
          <h4 className="font-bold">Baby Boobot</h4>
          <p>Starting @ $49/mo</p>
        </TableHeader>
        <TableHeader pos="center">
          <h4 className="font-bold">Pro Boobot</h4>
          <p>Starting @ $97/mo</p>
        </TableHeader>
        <TableHeader pos="right">
          <h4 className="font-bold">Enterprise Boobot</h4>
          <p>Contact cap@boo.ventures</p>
        </TableHeader>

        <FeatureCell>
          Point Economy
        </FeatureCell>
        <TableCell hasFeature="yes" pos="left"/>
        <TableCell hasFeature="yes" pos="center"/>
        <TableCell hasFeature="yes" pos="right" />
        
        <FeatureCell>
          Boonties
        </FeatureCell>
        <TableCell hasFeature="yes" pos="left" />
        <TableCell hasFeature="yes" pos="center" />
        <TableCell hasFeature="yes" pos="right" />


        <FeatureCell>
          Twitter Raids
        </FeatureCell>
        <TableCell hasFeature="no" pos="left" />
        <TableCell hasFeature="yes" pos="center" />
        <TableCell hasFeature="yes" pos="right" />

    
        <FeatureCell>
          On-Chain Raffles
        </FeatureCell>
        <TableCell hasFeature="no" pos="left" />
        <TableCell hasFeature="yes" pos="center" />
        <TableCell hasFeature="yes" pos="right" />

        <FeatureCell>
          Discord Store
        </FeatureCell>
        <TableCell hasFeature="no" pos="left" />
        <TableCell hasFeature="yes" pos="center" />
        <TableCell hasFeature="yes" pos="right" />

        <FeatureCell>
          Boobot Avatar Customisations
        </FeatureCell>
        <TableCell hasFeature="no" pos="left" />
        <TableCell hasFeature="yes" pos="center" />
        <TableCell hasFeature="yes" pos="right" />

        <FeatureCell>
          NFT Player Cards
        </FeatureCell>
        <TableCell hasFeature="no" pos="left" />
        <TableCell hasFeature="yes" pos="center" />
        <TableCell hasFeature="yes" pos="right" />

        <FeatureCell>
          Project Governance
        </FeatureCell>
        <TableCell hasFeature="no" pos="left" />
        <TableCell hasFeature="no" pos="center" />
        <TableCell hasFeature="yes" pos="right" />

        <FeatureCell>
          Dynamic NFT RPG
        </FeatureCell>
        <TableCell hasFeature="no" pos="left" />
        <TableCell hasFeature="no" pos="center" />
        <TableCell hasFeature="yes" pos="right" />

        <FeatureCell>
          Early Access to Boobot Upgrades
        </FeatureCell>
        <TableCell hasFeature="no" pos="left" />
        <TableCell hasFeature="no" pos="center" />
        <TableCell hasFeature="yes" pos="right" />

        <FeatureCell>
          Onboarding
        </FeatureCell>
        <TableCell pos="left">
          <p>1-Click Install</p>
        </TableCell>
        <TableCell pos="center">
          <p>Onboarding 40-minute Call</p>
        </TableCell>
        <TableCell pos="right">
          <p>1:1 Consulting & White Labelling Opportunities</p>
        </TableCell>

        <FeatureCell>
          Support
        </FeatureCell>
        <TableCell pos="left">
          <p>Basic Ticket Support</p>
        </TableCell>
        <TableCell pos="center">
          <p>Priority Ticket Support</p>
        </TableCell>
        <TableCell pos="right">
          <p>Direct Group Chat Support</p>
        </TableCell>

        <FeatureCell>
          Prices per user
        </FeatureCell>
        <TableCell pos="left">
          <p>&lt; 1k Users = $48/mo</p>
          <p>&lt; 3k Users = $69/mo</p>
          <p>&lt; 7k Users = $88/mo</p>
          <p>&gt; 7k Users = $111/mo</p>
        </TableCell>
        <TableCell pos="center">
          <p>&lt; 1k Users = $98/mo</p>
          <p>&lt; 3k Users = $128/mo</p>
          <p>&lt; 7k Users = $148/mo</p>
          <p>&gt; 7k Users = $169/mo</p>
        </TableCell>
        <TableCell pos="right" >
          <p>Custom proposals to be discussed</p>
        </TableCell>

      </div>
    </div>
  )
}
export default TierTable

const TableHeader: FC<{ children: ReactNode, pos: "left" | "center" | "right" }> = ({ children, pos }) => {
  const getStyle = () => {
    switch (pos) {
      case "left": return "bg-themeSkyBlue [border-top-left-radius:_1.5rem]";
      case "center": return "bg-themePink";
      case "right": return "bg-themeBlue [border-top-right-radius:_1.5rem]";
    }
  }
  return (
    <div className={clsx("p-2 text-center text-themeBlack noShadow border-2 border-themeBlack flex flex-col justify-between", getStyle())}>
      {children}
    </div>
  )
}

const TableCell: FC<{ children?: ReactNode, hasFeature?: "yes" | "no", pos: "left" | "center" | "right" }> = ({ children, hasFeature, pos }) => {
  const getIcon = () => {
    switch (hasFeature) {
      case "yes": return <Check colorClass="fill-emerald-600" />;
      case "no": return <Close colorClass="fill-pink-600" />;
      default: return null;
    }
  }
  const getCol = () => {
    return "border-themeWhite/20"
    switch (pos) { 
      case "left": return "border-themeSkyBlue";
      case "center": return "border-themePink";
      case "right": return "border-themeBlue border-b-2";
    }
  }

  return (
    <div className="px-4 border-x border-collapse border-themeWhite/20 flex items-end">
      <div className={clsx("-mb-[0.37rem] pb-[0.7rem] flex flex-col gap-2 justify-center items-center text-center w-full border-b", getCol())}>
        {getIcon()}
        {children}
      </div>
    </div>
  )
}

const FeatureCell: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <p className="p-2 text-right flex items-center justify-end  bg-themeWhite/10 rounded-l-md">
      {children}
    </p>

  )
}