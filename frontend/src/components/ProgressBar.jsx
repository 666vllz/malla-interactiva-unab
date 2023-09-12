import { Progress } from "@/components/ui/progress"

const ProgressBar = ({ progress }) => {
  return <Progress value={progress} className="my-5 w-[100%]" />
}

export default ProgressBar
