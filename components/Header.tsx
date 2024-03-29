"use client"

import Image from "next/image";
import { FC } from "react";
import logo from "../public/boo icon.png";
import { usePathname, useRouter } from "next/navigation";
import CTAButton from "./CTAButton";
import { signOut, useSession } from "next-auth/react";
import Button from "./Button";
import { User } from "@/app/api/auth/[...nextauth]/route";
import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";

const Header: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session } = useSession()

  const { clearForm } = useLocalStorage()
  
  const isHome = pathname === "/"
  const isInstall = pathname === "/install"

  const handleScroll = (id: string) => {

    if (!isHome) router.push(`/#${id}`)
    else {
      const el = document.getElementById(id)
      if (el) { 
        el.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          })
        if(location) location.hash = id
      }
    }
  }

  const handleSignOut = () => { 
    clearForm()
    signOut()
  }

  const showSignOut = isInstall && Boolean(session)

  return (
    <div className="fixed top-0 left-0 w-full bg-themeBlack/70 shadow-lg z-30">
      <div className="standardContainer py-2 flex items-center justify-between">
        <button onClick={() => handleScroll("landing")} className="flex items-center gap-4 hover:text-themeSkyBlue">
          <Image src={logo} alt="Boobot Logo" className="w-16 h-16" />
          <h2 className="text-2xl hidden md:block">Boobot</h2>
        </button>
        <div className="flex gap-4">
          <button className="hover:text-themeSkyBlue">
            <Link href="/leaderboard">
              <h3 className="text-xl underline">Leaderboard</h3>
            </Link>
          </button>

          <button onClick={() => handleScroll("about")} className="hover:text-themeSkyBlue">
            <h3 className="text-xl underline">Learn More</h3>
          </button>

          <button onClick={() => handleScroll("faq")} className="hover:text-themeSkyBlue">
            <h3 className="text-xl underline">FAQs</h3>
          </button>

          {isHome ? <CTAButton small className="hidden md:block" /> : null}
          {showSignOut
            ? (
              <Button small
                onClick={handleSignOut}
                text="Sign Out"
              />
            )
            : null}
        </div>
      </div>
    </div>
  )
}

export default Header