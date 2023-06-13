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

export const RightArrow: FC<SVGProps> = ({
  sizeClass = "h-6 w-6",
  colorClass = "fill-current stroke-none",
  className
}) => { 
  return (
    <svg className={clsx(sizeClass, colorClass, className)}  clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fillRule="nonzero" />
    </svg>
  )
}

export const Twitter: FC<SVGProps> = ({
  sizeClass = "h-6 w-6",
  colorClass = "fill-current stroke-none",
  className
}) => {
  return (
    <svg className={clsx(sizeClass, colorClass, className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  )
}

export const Email: FC<SVGProps> = ({
  sizeClass = "h-6 w-6",
  colorClass = "fill-none stroke-current",
  className
}) => {
  return (
    <svg className={clsx(sizeClass, colorClass, className)} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
      <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
    </svg>
  )
}