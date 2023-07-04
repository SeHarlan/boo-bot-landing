
import Radio, { makeOptions } from "@/components/Radio"
import { FC, useState } from "react";
import { Version, VersionTabProps } from "./tabs";
import { Dialog } from "@headlessui/react";
import TierTable from "@/components/home/tierTable";
import Button from "@/components/Button";
import { Close } from "@/svg/basic";


const VersionTab: FC<VersionTabProps> = ({ version, setVersion }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        small
        className="mx-auto"
        text="Compare Plans"
        onClick={() => setIsOpen(true)}
      />
      <Radio
        name="version"
        selected={version}
        setSelected={(version) => setVersion(version as Version)}
        options={makeOptions(["Baby Boobot", "Pro Boobot", "Enterprise Boobot"])}
      />


      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-neutral-700/50" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-auto">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="bg-neutral-900 p-4 rounded-xl relative max-h-full max-w-full overflow-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-2 right-2 text-neutral-300 hover:text-white duration-200 bg-neutral-900 rounded-full p-2 shadow-lg"
            ><Close /></button>
            <div className="max-h-full max-w-full">
              <TierTable gridClassName="bg-transparent min-w-[50rem]" wrapperClassName="removeDefault"/>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default VersionTab;