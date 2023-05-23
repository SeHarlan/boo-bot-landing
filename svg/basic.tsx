import { SVGProps } from "@/types/global"
import clsx from "clsx"
import { FC } from "react"


export const Check: FC<SVGProps> = ({
  sizeClass = "h-6 w-6",
  colorClass = "fill-current stroke-none",
  className
}) => {
  return (
    <svg className={clsx(sizeClass, colorClass, className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
  )
}

export const Close: FC<SVGProps> = ({
  sizeClass = "h-6 w-6",
  colorClass = "fill-current stroke-none",
  className
}) => {
  return (
    <svg className={clsx(sizeClass, colorClass, className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
    </svg>
  )
}