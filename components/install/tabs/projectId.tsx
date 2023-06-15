import { FC } from "react";
import { InformationTabProps } from "./tabs";

const ProjectIdTab: FC<InformationTabProps> = ({ information, setInformation }) => {
  return (
    <div className="">
      <p className="text-lg">What is your Discord Server ID?</p>
      <p className="text mb-2 text-themeSkyBlue">Please make sure you have the correct ID as this is how we will know where to send the bot!</p>
        <input
          className="ml-1 block rounded bg-neutral-700 py-2 px-4 mt-4"
          placeholder="Discord Server ID"
          value={information.serverID || ""}
          onChange={(e) => {
            setInformation({ ...information, serverID: e.target.value })
          }}
        />
    </div>
  )
}

export default ProjectIdTab;