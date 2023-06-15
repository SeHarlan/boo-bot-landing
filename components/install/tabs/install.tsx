import Radio, { makeOptions } from "@/components/Radio"
import { FC, useState } from "react"
import { ChainOptions } from "./tabs";

interface InstallTabProps { 
  blockchain: ChainOptions;
  setBlockchain: (chain: ChainOptions) => void;
}

const InstallTab:FC<InstallTabProps> = ({blockchain, setBlockchain}) => { 
  return (
    <div>
      <Radio
        name="blockchain"
        selected={blockchain}
        setSelected={(chain) => setBlockchain(chain as ChainOptions)}
        options={makeOptions(["Solana" , "Near" , "Sui" , "None"])}
      />
    </div>
  )
}

export default InstallTab