"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import clsx from "clsx";
import { DATA } from "../utils/constants";

// const colleges = [
//   {
//     value: "mumbai",
//     label: "Mumbai",
//   },
//   {
//     value: "delhi",
//     label: "Delhi",
//   },
//   {
//     value: "kanpur",
//     label: "Kanpur",
//   },
//   {
//     value: "srinagar",
//     label: "Srinagar",
//   },
//   {
//     value: "chennai",
//     label: "Chennai",
//   },
// ];

const colleges = DATA.edu.map((edu) => ({
  value: edu.name.toLowerCase().replaceAll(" ", "-"),
  label: edu.name,
}));

export function CollegeCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? colleges.find((framework) => framework.value === value)?.label
            : "Select College"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search College" className="h-9" />
          <CommandEmpty>No College found.</CommandEmpty>
          <CommandGroup>
            {colleges.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={clsx(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
