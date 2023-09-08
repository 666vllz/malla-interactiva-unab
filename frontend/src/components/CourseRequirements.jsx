import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const CourseRequirements = ({ requirements }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Requisitos</TooltipTrigger>
        <TooltipContent>
          <ul>
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CourseRequirements
