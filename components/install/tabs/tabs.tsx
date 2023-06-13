"use client"

import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import Button from "@/components/Button"
import { RightArrow } from "@/svg/basic"
import ProjectTypeTab from "./projectType"
import ProjectUsersTab from "./projectUsers"
import ProjectPurposeTab from "./projectPurpose"
import VersionTab from "./version"
import PaymentTab from "./payment"
import ReferralsTab from "./referrals"
import InstallTab from "./install"
import { Cross, Grid } from "@/svg/pixelElements"
import { useSignedIn } from "@/context/SignedInProvider"
import { useRouter } from "next/navigation"


export interface Information { 
  type: string[];
  userCount: string | null;
  purpose: string | null;
  purposeOther: string | null;
}

export type Version = "Baby Boo Bot" | "Pro Boo Bot" | "Enterprise Boo Bot" | null

export type ChainOptions = "Solana" | "Near" | "Sui" | "None" | null

export interface InformationTabProps {
  information: Information;
  setInformation: (information: Information) => void;
}

export interface VersionTabProps {
  version: Version;
  setVersion: (information: Version) => void;
}

const Tabs = () => {
  const router = useRouter()
  const { signedIn, handleSignOut } = useSignedIn()

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [information, setInformation] = useState<Information>({
    type: [],
    userCount: null,
    purpose: null,
    purposeOther: null,
  })
  const [version, setVersion] = useState<Version>(null)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [referrals, setReferrals] = useState<string[]>([])
  const [blockchain, setBlockchain] = useState<ChainOptions>(null)

  const handlePurchase = () => {
    setPaymentComplete(true)
    setActiveTabIndex(activeTabIndex + 1)
  }

  const handleInvite = () => {
    alert(`You've invited ${referrals.join(", ")}!`)
    setActiveTabIndex(activeTabIndex + 1)
  }

  const formResults = {
    information,
    version,
    paymentComplete,
    referrals,
    blockchain
  }

  const handleInstall = () => {
    alert(`You have installed boo bot! this is all the info: ${JSON.stringify(formResults)}`)
    router.push("/")
    handleSignOut()
  }

  const infoLabels = {
    heading: "Finding the right version for you",
    description: "Tell us about your project",
  }

  const tabs = [
    { ...infoLabels, content: <ProjectTypeTab information={information} setInformation={setInformation} /> },
    { ...infoLabels, content: <ProjectUsersTab information={information} setInformation={setInformation} /> },
    { ...infoLabels, content: <ProjectPurposeTab information={information} setInformation={setInformation} /> },
    {
      heading:
        "Select Your Boo Bot",
      description: "Pick the Boo Bot version that best suits your project's needs: Basic, Premium, or Complete.",
      content: <VersionTab version={version} setVersion={setVersion} />,
    },
    {
      heading: "Connect and Choose",
      description: "Connect your Solana Phantom/Backpack wallet and select your preferred payment plan.",
      content: <PaymentTab information={information} version={version} setPaymentComplete={setPaymentComplete} />
    },
    {
      heading: "Spread the Word and Earn Rewards",
      description: "Invite friends to Boo Bot and earn 30% of their subscription or prepayment. Start now or later from your account.",
      content: <ReferralsTab referrals={referrals} setReferrals={setReferrals} />
    },
    {
      heading: "Choose Your Chain and Install",
      description: "Select the desired blockchain (Solana, Near, Sui, or None) and install the Boo Bot on Discord.",
      content: <InstallTab blockchain={blockchain} setBlockchain={setBlockchain}/>
    }
  ]


  const checkFinished = () => {
    switch (activeTabIndex) {
      case 0: return Boolean(information.type.length);
      case 1: return Boolean(information.userCount);
      case 2: return Boolean(information.purpose);
      case 3: return Boolean(version);
      case 4: return paymentComplete;
      case 5: true //Referrals Tab optional
      default: return true;
    }
  }

  const continueButton = () => {
    switch (activeTabIndex) {
      case 4: return (
        <Button
          small
          sizeClass="text-lg py-0 px-4"
          text="Purchase and Continue"
          onClick={handlePurchase}
          rightIcon={<RightArrow sizeClass="w-5 h-5" />}
        />
      )
      case 5: return (
        <>
          <Button
            disabled={referrals.length === 0}
            small
            sizeClass="text-lg py-0 px-4"
            text="Invite and Continue"
            onClick={handleInvite}
            rightIcon={<RightArrow sizeClass="w-5 h-5" />}
          />
          <button
            className="text-neutral-300 text-sm font-medium hover:text-white duration-200 ml-4"
            onClick={() => setActiveTabIndex(activeTabIndex + 1)}
          >
            Skip for now 
          </button>
        </>
      )
      case 6: return (
        <Button
          disabled={!blockchain}
          text="Install!"
          onClick={handleInstall}
          leftIcon={<Grid />}
          rightIcon={<Grid className="-scale-x-1"/>}
        />
      )
      default: return (
        <Button
          small
          sizeClass="text-lg py-0 px-4"
          text="Continue"
          disabled={(activeTabIndex === tabs.length - 1) || checkFinished() === false}
          onClick={() => setActiveTabIndex(activeTabIndex + 1)}
          rightIcon={<RightArrow sizeClass="w-5 h-5" />}
        />
      )
    }
  }

  if (!signedIn) return null

  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="rounded-xl bg-neutral-800 p-4 md:px-12 md:py-8 w-full max-w-3xl flex flex-col justify-between gap-2 h-full md:h-fit overflow-auto">
        <div className="relative w-full flex gap-2">
          {tabs.map((tab, i) => {
            const selected = i <= activeTabIndex
            return (
              <div
                key={tab.heading + i}
                className={clsx(
                  "h-1 w-10 rounded-full duration-300",
                  selected ? "bg-themeSkyBlue" : "bg-neutral-700"
                )}
              />
            )
          })}
        </div>  
        <div className="py-4 min-h-[22rem] overflow-auto">
          <h2 className="text-3xl font-bold mb-2">{tabs[activeTabIndex].heading}</h2>
          <p className="text-neutral-400 mb-4">{tabs[activeTabIndex].description}</p>
          {tabs[activeTabIndex].content}
        </div>
        <div className="flex justify-center gap-3">
          {/* <Button
            small
            text="&lt; Back"
            disabled={activeTabIndex === 0}
            onClick={() => setActiveTabIndex(activeTabIndex - 1)}
          /> */}
          {continueButton()}
        </div>
      </div>
    </div>
  )
}
export default Tabs