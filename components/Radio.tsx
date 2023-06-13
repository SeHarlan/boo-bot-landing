"use client"

import { Check } from "@/svg/basic";
import clsx from "clsx";
import { FC } from "react"

interface RadioProps {
  name: string
  options: {
    value: string;
    label: string;
  }[];
  selected: string | null;
  setSelected: (selected: string) => void;
}
export const makeOptions = (values: string[]) => values.map((v) => ({ value: v, label: v }))

const Radio: FC<RadioProps> = ({ options, name, selected, setSelected }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      {options.map((option) => {
        const isSelected = selected === option.value
        return (
          <label key={`${name}-${option.value}`} className="flex items-center gap-2 hover:cursor-pointer">
            <span className={clsx(
              "inline-flex h-5 w-5 border-2 border-themeSkyBlue rounded-full justify-center items-center flex-shrink-0",
              isSelected ? "bg-themeSkyBlue" : ""
            )}>
              {isSelected ? <Check className="-mb-0.5" sizeClass="h-4 w-4" colorClass="fill-neutral-800"/> : null}
            </span>
            <input
              className="hidden"
              type="radio"
              name={name} id={option.value}
              value={option.value}
              checked={isSelected}
              onChange={() => setSelected(option.value)}
            />
            {option.label}
          </label>
        )
      })}
    </div>
  ) 
}

export default Radio