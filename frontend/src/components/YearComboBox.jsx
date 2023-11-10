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

const YearComboBox = ({ options, handleSelectedProgram }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-black/20 bg-white text-black outline-none hover:border-blue-400 hover:bg-white hover:text-black"
        >
          <span className="truncate">
            {value
              ? options.find((option) => option === value)
              : "Seleccionar cohorte"}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="display-none bg-white text-black">
          <CommandInput placeholder="Buscar malla..." />
          <CommandEmpty>Malla no encontrada</CommandEmpty>
          <ScrollArea className="h-72 border-none pr-2">
            <CommandGroup className="text-black">
              {options.map((option) => (
                <CommandItem
                  key={option}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : option)
                    handleSelectedProgram(option)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.PROGRAMA ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="w-full text-start">{option}</div>
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default YearComboBox
