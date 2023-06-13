import { makeOptions } from "@/components/Radio"
import { FC } from "react";
import { InformationTabProps } from "./tabs";
import Checkbox from "@/components/Checkbox";

const ProjectTypeTab: FC<InformationTabProps> = ({information, setInformation}) => {
  return (
    <div className="">
      <p className="text-lg">What type of web3 project do you have?</p>
      <p className="text-sm mb-2 text-neutral-400">You can choose multiple</p>
      <Checkbox
        name="type"
        selected={information.type}
        setSelected={(type) => setInformation({ ...information, type })}
        options={makeOptions(["NFT", "Art", "DeFi", "Infrastructure", "Gaming", "Other"])}
      />
    </div>
  )
}

export default ProjectTypeTab;