import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import InfoIcon from "./InfoIcon"

const CourseInfo = ({
  title,
  className,
  description,
  requirements,
  enablings,
}) => {
  return (
    <Dialog>
      <DialogTrigger className={className}>
        <InfoIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2 text-2xl">{title}</DialogTitle>
          <DialogDescription>
            {description ? description : "No tiene descripción"}

            <div className="relative overflow-x-auto"></div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CourseInfo
