"use client"

import { Close } from "@/svg/basic";
import { FC, useRef, useState } from "react";

interface ReferralsTabProps {
  referrals: string[];
  setReferrals: (referrals: string[]) => void;
}

const ReferralsTab: FC<ReferralsTabProps> = ({referrals, setReferrals}) => { 
  const [emailInput, setEmailInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  return (
    <div>
      <p className="text-lg mb-2">Email Addresses</p>
      <div className="border border-neutral-400 rounded-lg cursor-text flex flex-wrap gap-2 p-2" onClick={handleFocus} >
        {referrals?.map((referral, i) => {
          return (
            <div key={i}
              className="flex items-center justify-between gap-2 px-2 py-1 bg-neutral-700 rounded-lg"
            >
              <p className="text-sm">{referral}</p>
              <button
                onClick={() => setReferrals(referrals.filter((_, index) => index !== i))}
                className="hover:brightness-100 brightness-50 duration-100"           
              >
                <Close sizeClass="w-3 h-3"/>
              </button>
            </div>
          )
        })}
        <input type="email"
          ref={inputRef}
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="bg-transparent w-[18rem] outline-none p-1 "
          placeholder="Enter email address and press enter"
          onKeyDown={(e) => { 
            if (e.key === "Enter") {
              if (!emailInput) return
              setReferrals([...referrals, emailInput])
              setEmailInput("")
            }
          }}
        />
      </div>
    </div>
  )
}

export default ReferralsTab;