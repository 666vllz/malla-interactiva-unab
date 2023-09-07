import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import InfoIcon from "./InfoIcon"

const CourseInfo = ({ title }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <InfoIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem
            voluptas perspiciatis aliquam mollitia? In fugit autem obcaecati
            nisi perferendis, dignissimos cupiditate inventore cumque architecto
            quos. Laudantium velit molestias facere?
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CourseInfo
