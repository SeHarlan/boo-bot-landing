"use client"

import { Check } from "@/svg/basic";
import clsx from "clsx";
import { FC } from "react"

interface CheckboxProps {
  name: string
  options: {
    value: string;
    label: string;
  }[];
  selected: string[];
  setSelected: (selected: string[]) => void;
}
export const makeOptions = (values: string[]) => values.map((v) => ({ value: v, label: v }))

const Checkbox: FC<CheckboxProps> = ({ options, name, selected, setSelected }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const { value } = event.target;

    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  }

  return (
    <div className="flex flex-col items-start gap-1">
      {options.map((option) => {
        const isSelected = selected.includes(option.value)
        return (
          <label key={`${name}-${option.value}`} className="flex items-center gap-2 hover:cursor-pointer">
            <span className={clsx(
              "inline-flex h-5 w-5 border-2 border-themeSkyBlue rounded-full justify-center items-center flex-shrink-0",
              isSelected ? "bg-themeSkyBlue" : ""
            )}>
              {isSelected ? <Check className="-mb-0.5" sizeClass="h-4 w-4" colorClass="fill-neutral-800" /> : null}
            </span>
            <input
              className="hidden"
              type="checkbox"
              name={name} id={option.value}
              value={option.value}
              checked={isSelected}
              onChange={handleCheckboxChange}
            />
            {option.label}
          </label>
        )
      })}
    </div>
  )
}

export default Checkbox