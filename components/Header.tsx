"use client"

import Image from "next/image";
import { FC, useEffect } from "react";
import logo from "../public/boo icon.png";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const router = useRouter()

  
  const handleScroll = (id: string) => {
    // router.replace(`/#${id}`)
    const el = document.getElementById(id)
    if (el) { 
      el.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
      if(location) location.hash = id
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-themeBlack/70 shadow-lg z-30">
      <div className="standardContainer py-2 flex items-center justify-between">
        <button onClick={() => handleScroll("landing")} className="flex items-center gap-4 hover:text-themeSkyBlue">
          <Image src={logo} alt="Boo Bot Logo" className="w-16 h-16" />
          <h2 className="text-2xl hidden md:block">Boo Bot</h2>
        </button>
        <div className="flex gap-4">
          <button onClick={() => handleScroll("about")} className="hover:text-themeSkyBlue">
            <h3 className="text-xl underline">Learn More</h3>
          </button>

          <button onClick={() => handleScroll("faq")} className="hover:text-themeSkyBlue">
            <h3 className="text-xl underline">FAQs</h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header