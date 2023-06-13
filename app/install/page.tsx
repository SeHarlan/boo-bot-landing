import SignIn from "@/components/install/signin"
import Tabs from "@/components/install/tabs/tabs"

export default function Install() { 
  return (
    <div className="standardContainer py-20 h-screen relative">
      <SignIn />
      <Tabs />
    </div>
  )
}