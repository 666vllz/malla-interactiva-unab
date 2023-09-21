import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

const ComboBox = ({ options, defaultText, notFoundText }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  console.log(value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between bg-[#202020]"
        >
          <span className="truncate">
            {value
              ? options.find((option) => option.PROGRAMA === value)?.DESCRIPCION
              : defaultText}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="display-none bg-[#202020] text-white">
          <CommandInput placeholder="Search option..." />
          <CommandEmpty>{notFoundText}</CommandEmpty>
          <ScrollArea className="h-72 border-none pr-2">
            <CommandGroup className="text-zinc-300">
              {options.map((option) => (
                <CommandItem
                  key={option.PROGRAMA}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : option.PROGRAMA)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.PROGRAMA ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="w-full text-start">{option.DESCRIPCION}</div>
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ComboBox
