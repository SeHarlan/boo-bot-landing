
import Radio, { makeOptions } from "@/components/Radio"
import { FC } from "react";
import { InformationTabProps } from "./tabs";

const ProjectPurposeTab: FC<InformationTabProps> = ({ information, setInformation }) => {
  const handlePurposeChange = (purpose: string) => { 
    if (purpose !== "Other: Please let us know") {
      setInformation({ ...information, purpose, purposeOther: null })
    } else {
      setInformation({ ...information, purpose })
    }
  }
  return (
    <div>
      <p className="text-lg mb-2">Why would you like to use the Boo Bot?</p>
      <Radio
        name="purpose"
        selected={information.purpose}
        setSelected={handlePurposeChange}
        options={makeOptions(["To increase Twitter engagement", "To foster greater community participation", "To test out its features & effectiveness", "To build a more engaged discord community", "Other: Please let us know"])}
      />
      {information.purpose === "Other: Please let us know" && (
        <input
          value={information.purposeOther || undefined}
          onChange={(e) => setInformation({ ...information, purposeOther: e.target.value })}
          className="md:ml-7 w-full max-w-sm bg-neutral-700 rounded-lg p-2 mt-2"
        />
      )}
    </div>
  )
}

export default ProjectPurposeTab;