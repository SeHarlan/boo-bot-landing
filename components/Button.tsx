import clsx from "clsx";

interface ButtonProps { 
  text: string;
  className?: string;
  sizeClass?: string;
  small?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, className, sizeClass, small, onClick, disabled, leftIcon = null, rightIcon = null }) => { 
  const textClass = small
    ? "text-sm py-1 px-2"
    : "text-lg py-2 px-4"
  
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border-[0.2rem] rounded-sm duration-300",
        "hover:text-themeSkyBlue disabled:text-neutral-600",
        "hover:scale-105 active:scale-100 disabled:scale-100",
        "border-themeSkyBlue/50 hover:border-themeSkyBlue disabled:border-neutral-600",
        "font-bold flex items-center justify-center gap-2",
        sizeClass ? sizeClass : textClass,
        className
      )}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  )
}


export default Button