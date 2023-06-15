"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const SignedInContext = createContext({
  signedIn: false,
  handleSignIn: () => { },
  handleSignOut: () => { },
});

export const useSignedIn = () => useContext(SignedInContext);

export default function SignedInProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false)

  const handleSignIn = () => {
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
