import { FC } from "react"
import Link from "next/link";
import { RightArrow } from "@/svg/basic";

interface SetupTabProps {
 inviteLink: string | null;
}

const SetupTab: FC<SetupTabProps> = ({ inviteLink }) => {
  if (!inviteLink) return (
    <div>
      <p>Oops, looks life something went wrong!</p>
      <p>Please try again later or contact us at <a href="mailto:cap@boo.ventures">cap@boo.ventures</a></p>
    </div>
  )

  const hClass = "text-lg mb-1"
  const pClass = "mb-3"
  return (
    <div>
      <div className="flex items-center gap-1 mb-3">
        <h2 className="text-lg">1 - Click The Invite Link</h2>
        <RightArrow sizeClass="h-5 w-5"/>
        <Link href={inviteLink} >
          <p className="text-lg underline decoration-themeSkyBlue text-themeSkyBlue">{inviteLink}</p>
        </Link>
      </div>

      <h3 className={hClass}>2 - Initialize the server</h3>
      <p className={pClass}>Use the /initializeserver command to create a server wallet and start the Boobot.</p>

      <h3 className={hClass}>3 - Configure the bot</h3>
      <p className={pClass}>Use the /configserver and /configserverroles commands to setup the default channels & roles for the Boobot.</p>

      <h3 className={hClass}>4 - Play with the features!</h3>
      <p className={pClass}>We'd recommend playing around in a test server and then introducing to your community, along with a public announcement to display the main features you'd like your community to use.</p>
    </div>
  )
}

export default SetupTab