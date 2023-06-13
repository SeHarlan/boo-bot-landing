import Radio, { makeOptions } from "@/components/Radio"
import { FC } from "react";
import { Information, InformationTabProps } from "./tabs";

const ProjectTypeTab: FC<InformationTabProps> = ({information, setInformation}) => {
  return (
    <div className="">
      <p className="text-lg mb-2">What type of web3 project do you have?</p>
      <Radio
        name="type"
        selected={information.type}
        setSelected={(type) => setInformation({ ...information, type })}
        options={makeOptions(["NFT", "Art", "DeFi", "Infrastructure", "Gaming", "Other"])}
      />
    </div>
  )
}

export default ProjectTypeTab;