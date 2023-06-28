"use client"

import { User } from "@/app/api/auth/[...nextauth]/route"
import { useSession } from "next-auth/react"


const useLocalStorage = () => {
  const { data: session } = useSession()
  const user = session?.user as User
  const userId = user?.id

  const setAllowEmail = (allow: boolean) => {
    if(!localStorage) return
    localStorage.setItem(`allow-email`, allow.toString())
  }
  const getAllowEmail = () => {
    if(typeof localStorage == "undefined") return
    return localStorage.getItem(`allow-email`)
  }

  const setForm = (propKey: string, value: any) => { 
    if(typeof localStorage == "undefined") return
    const existing = localStorage.getItem(`${userId}-intake-form`)
    const form = existing ? JSON.parse(existing) : {}
    form[propKey] = value
    localStorage.setItem(`${userId}-intake-form`, JSON.stringify(form))
  }

  const getForm = () => {
    if(typeof localStorage == "undefined") return {}
    const existing = localStorage.getItem(`${userId}-intake-form`)
    const form = existing ? JSON.parse(existing) : {}

    const email = localStorage.getItem(`allow-email`)
    if (email) form["allow-email"] = email
    if (user) form["user"] = user
    return form
  }

  const clearForm = () => {
    if(typeof localStorage == "undefined") return
    localStorage.removeItem(`${userId}-intake-form`)
  }

  return {
    getForm,
    setForm,
    setAllowEmail,
    clearForm
  }
}

export default useLocalStorage