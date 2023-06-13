"use client"

import clsx from "clsx";
import { useRouter } from "next/navigation";

interface CTAButtonProps { 
  text?: string;
  className?: string;
  small?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text = "Install the Bot in Seconds", className, small }) => { 
const router = useRouter()
  const handleClick = () => { 
    router.push("/install")
  }

  const animClass = small
    ? "bg-themeSkyBlue/50 hover:bg-themeSkyBlue"
    : "animate-borderRotate bg-gradient-to-tr from-themeSkyBlue to-themeBlack hover:from-themeSkyBlue hover:to-themePink/50"
  
  const textClass = small
    ? "text-sm py-1 px-2"
    : "text-lg py-2 px-4"
  
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "p-[0.2rem] rounded-sm duration-300",
        "hover:[&>div]:text-themeSkyBlue",
        "hover:scale-105 active:scale-100",
        animClass,
        className
      )}
    >
      <div className={clsx(
        textClass,
        "font-bold bg-themeBlack",
        "duration-300"
        )}
      >
        {text}
      </div>
    </button>
  )
}


export default CTAButton