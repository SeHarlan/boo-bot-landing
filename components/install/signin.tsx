"use client"

import { Email, Twitter } from "@/svg/basic"
import { Switch, Transition } from "@headlessui/react"
import { useState } from "react"
import Button from "../Button"
import { useSignedIn } from "@/context/SignedInProvider"

const SignIn = () => { 
  const { signedIn, handleSignIn } = useSignedIn()
  const [useTwitter, setUseTwitter] = useState(true)
  const [email, setEmail] = useState("")

  const handleSignInClick = () => { 
    handleSignIn({ useTwitter, email })
  }

  const emailInput = (
    <Transition
      appear={true}
      show={!useTwitter}
    >
      <input
        type="email"
        className="block mx-auto rounded bg-neutral-700 py-2 px-4 mt-4"
        placeholder="Enter Work Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
    </Transition>
  )

  if(signedIn) return null

  return (
    <div className="flex justify-center items-center h-full">
      <div className="rounded-xl bg-neutral-800 p-4 md:px-12 md:py-8 w-full max-w-lg">
        <h1 className="text-4xl text-center mb-6">Let's Get Started</h1>
        <p className="text-lg text-center mb-8">Log in with your Twitter or Email</p>
        <Switch
          checked={useTwitter}
          onChange={() => setUseTwitter(!useTwitter)}
          className={`mx-auto relative flex h-10 w-20 items-center rounded-lg bg-neutral-700 shadow-inner`}
        >
          <span className="sr-only">Toggle between Email and Twitter sign in options</span>
          <span
            className={`${useTwitter ? 'translate-x-10 bg-blue-500' : 'translate-x-0 bg-themeBlack'
              } h-10 w-10 transform rounded-lg transition flex items-center justify-center shadow`}
          >
            {useTwitter ? <Twitter /> : <Email className="stroke-1"/>}
          </span>
          <span
            className={`${useTwitter ? '-translate-x-10' : 'translate-x-0'
              } h-10 w-10 flex items-center justify-center`}
          >
            {!useTwitter ? <Twitter className="fill-neutral-800"/> : <Email className="stroke-1 stroke-neutral-800" />}
          </span>
        </Switch>
        
        {!useTwitter ? emailInput : null}
        
        <Button
          className="block mx-auto mt-8"
          text={`Log In With ${useTwitter ? "Twitter" : "Email"}`}
          disabled={!useTwitter && !email}
          onClick={handleSignInClick}
        />
      </div>
    </div>
  )
}

export default SignIn