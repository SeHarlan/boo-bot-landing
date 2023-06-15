import Radio, { makeOptions } from "@/components/Radio"
import { FC } from "react";
import { InformationTabProps } from "./tabs";

const ProjectUsersTab: FC<InformationTabProps> = ({ information, setInformation }) => {
  return (
    <div>
      <p className="text-lg mb-2">How many users are in your Discord?</p>
      <Radio
        name="userCount"
        selected={information.userCount}
        setSelected={(userCount) => setInformation({ ...information, userCount })}
        options={makeOptions(["Less than 1k members", "1k - 3k members", "3k - 7k members", "More than 7k members"])}
      />
    </div>
  )
}

export default ProjectUsersTab;