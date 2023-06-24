"use client"

import clsx from "clsx"
import { useState } from "react"
import Button from "@/components/Button"
import { RightArrow } from "@/svg/basic"
import ProjectTypeTab from "./projectType"
import ProjectUsersTab from "./projectUsers"
import ProjectPurposeTab from "./projectPurpose"
import VersionTab from "./version"
import PaymentTab from "./payment"
import ReferralsTab from "./referrals"
import InstallTab from "./install"
import { Grid } from "@/svg/pixelElements"
import ProjectIdTab from "./projectId"
import SetupTab from "./setup"
import { useSession } from "next-auth/react"


export interface Information { 
  serverID: string | null
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
  const { data: session } = useSession()

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [information, setInformation] = useState<Information>({
    type: [],
    userCount: null,
    purpose: null,
    purposeOther: null,
    serverID: null
  })
  const [version, setVersion] = useState<Version>(null)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [referrals, setReferrals] = useState<string[]>([])
  const [blockchain, setBlockchain] = useState<ChainOptions>(null)
  const [inviteLink, setInviteLink] = useState<string | null>(null)

  const handleInvite = () => {
    setActiveTabIndex(activeTabIndex + 1)
  }

  const formResults = {
    session,
    information,
    version,
    paymentComplete,
    referrals,
    blockchain
  }

  const handleInstall = () => {
    alert(`You have installed boo bot! this is all the info: ${JSON.stringify(formResults)}`)

    // send form results to BE, recieve an invite Link
    const inviteLink = "https://www.google.com"
    if (inviteLink) {
      setInviteLink(inviteLink)
      setActiveTabIndex(activeTabIndex + 1)
    } else {
      // handle error
    }
  }

  const infoLabels = {
    heading: "Finding the right version for you",
    description: "Tell us about your project",
  }

  //if changing order of tabs, make sure to adjust the index of checkFinished and continueButton accordingly
  const tabs = [
    {
      ...infoLabels,
      content: <ProjectTypeTab information={information} setInformation={setInformation} />,
      check: () => Boolean(information.type.length),
      button: "default",
    },
    {
      ...infoLabels,
      content: <ProjectUsersTab information={information} setInformation={setInformation} />,
      check: () => Boolean(information.userCount),
      button: "default",
    },
    {
      ...infoLabels,
      content: <ProjectPurposeTab information={information} setInformation={setInformation} />,
      check: () => Boolean(information.purpose),
      button: "default",
    },
    {
      heading: "Select Your Boo Bot",
      description: "Pick the Boo Bot version that best suits your project's needs: Basic, Premium, or Complete.",
      content: <VersionTab version={version} setVersion={setVersion} />,
      check: () => Boolean(version),
      button: "default",
    },
    {
      heading: "Connect and Choose",
      description: "Connect your Solana Phantom/Backpack wallet and select your preferred payment plan.",
      content: <PaymentTab information={information} version={version} setPaymentComplete={setPaymentComplete} />,
      check: () => true,//paymentComplete,
      button: "default",
    },
    {
      heading: "Spread the Word and Earn Rewards",
      description: "Invite friends to Boo Bot and earn 30% of their subscription or prepayment. Start now or later from your account.",
      content: <ReferralsTab referrals={referrals} setReferrals={setReferrals} />,
      check: () => true, //referals are optional
      button: "invite",
    },
    {
      heading: "What is your Discord Server ID?",
      description: "Turn on Developer Mode in Discord and right click on your server to copy the ID.",
      content: <ProjectIdTab information={information} setInformation={setInformation} />,
      check: () => Boolean(information.serverID),
      button: "default",
    },
    {
      heading: "Choose Your Chain and Install",
      description: "Select the desired blockchain (Solana, Near, Sui, or None) and install the Boo Bot on Discord.",
      content: <InstallTab blockchain={blockchain} setBlockchain={setBlockchain} />,
      check: () => Boolean(blockchain),
      button: "install",
    },
    {
      heading: "Installation Complete!",
      description: "Now we just need to use this link to invite your new Boo Bot to your server and follow a few simple steps",
      content: <SetupTab inviteLink={inviteLink} />,
      check: () => Boolean(inviteLink),
      button: "none",
    }
  ]


  const checkFinished = () => tabs[activeTabIndex].check();

  const continueButton = () => {
    switch (tabs[activeTabIndex].button) {
      // case "purchase": return (
      //   <Button
      //     small
      //     sizeClass="text-lg py-0 px-4"
      //     text="Purchase and Continue"
      //     onClick={handlePurchase}
      //     rightIcon={<RightArrow sizeClass="w-5 h-5" />}
      //   />
      // )
      case "invite": return (
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
      case "install": return (
        <Button
          small
          sizeClass="text-lg py-0 px-4"
          disabled={!blockchain}
          text="Install!"
          onClick={handleInstall}
          leftIcon={<Grid />}
          rightIcon={<Grid className="-scale-x-1"/>}
        />
      )
      case "none": return null;
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

  if (!session) return null

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
          {continueButton()}
        </div>
      </div>
    </div>
  )
}
export default Tabs