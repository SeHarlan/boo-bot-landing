
import Radio, { makeOptions } from "@/components/Radio"
import { FC } from "react";
import { Version, VersionTabProps } from "./tabs";


const VersionTab: FC<VersionTabProps> = ({ version, setVersion }) => {
  return (
    <div>
      <Radio
        name="version"
        selected={version}
        setSelected={(version) => setVersion(version as Version)}
        options={makeOptions(["Baby Boo Bot", "Pro Boo Bot", "Enterprise Boo Bot"])}
      />
    </div>
  )
}

export default VersionTab;