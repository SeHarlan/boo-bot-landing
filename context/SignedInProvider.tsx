"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface HandleSignInArgs {
  useTwitter: boolean;
  email?: string;
}

const SignedInContext = createContext({
  signedIn: false,
  handleSignIn: ({ useTwitter, email }: HandleSignInArgs) => { },
  handleSignOut: () => { },
});

export const useSignedIn = () => useContext(SignedInContext);

export default function SignedInProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false)
  const handleSignIn = ({ useTwitter, email }: HandleSignInArgs) => {
    if (useTwitter) {
      // handle Twitter connect
    } else {
      if (!email) throw new Error("Email is required")
      // handle email connect
    }
    setSignedIn(true)
  }
  const handleSignOut = () => { 
    setSignedIn(false)
  }

  useEffect(() => {
    // TODO
    // determine if signed in based on local storage?
  }, [])

  return (
    <SignedInContext.Provider value={{signedIn, handleSignIn, handleSignOut}}>
      {children}
    </SignedInContext.Provider>
  );
};
