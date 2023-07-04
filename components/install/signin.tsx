"use client"

import Button from "../Button"
import { useSession, signIn } from "next-auth/react"
import Radio from "../Radio"
import Checkbox from "../Checkbox"
import { useState } from "react"
import useLocalStorage from "@/hooks/useLocalStorage"


const SignIn = () => { 
  const {setAllowEmail: setEmailStorage} = useLocalStorage() 
  const [allowEmail, setAllowEmail] = useState(true)
  const { data: session, status } = useSession()

  const handleSignInClick = () => { 
    setEmailStorage(allowEmail)
    signIn("discord")
  }

  const handleEmailAllowChange = (selected: string[]) => {
    const yesEmails = selected[0] === "yes";
    setAllowEmail(yesEmails)
  }

  if(session) return null

  return (
    <div className="flex justify-center items-center h-full">
      <div className="rounded-xl bg-neutral-800 p-4 md:px-12 md:py-8 w-full max-w-lg">
        <h1 className="text-4xl text-center mb-6">Let's Get Started</h1>
        
        <Button
          className="block mx-auto mt-8"
          // text={`Log In With ${useTwitter ? "Twitter" : "Email"}`}
          // disabled={!useTwitter && !email}
          text="Log In With Discord"
          onClick={handleSignInClick}
        />

        <div className="flex justify-center py-4">
          <Checkbox
            name="emails-ok"
            options={[{ value: "yes", label: "I want cool Boobot related emails" }]}
            selected={allowEmail ? ["yes"] : []}
            setSelected={handleEmailAllowChange}
          />
        </div>
      </div>
    </div>
  )
}

export default SignIn