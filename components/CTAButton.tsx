import clsx from "clsx";

interface CTAButtonProps { 
  text?: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text = "Install the Bot in Seconds", className }) => { 
  return (
    <button
      className={clsx(
        "p-1 rounded-sm",
        "from-themeSkyBlue to-themeBlack",
        "animate-borderRotate bg-gradient-to-tr duration-300",
        "hover:from-themeSkyBlue hover:to-themePink/50",
        "hover:[&>div]:text-themeSkyBlue",
        "hover:scale-105 active:scale-100",
        className
      )}
    >
      <div className={clsx(
        "py-2 px-4",
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