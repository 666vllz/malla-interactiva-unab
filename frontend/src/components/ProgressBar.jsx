import { Progress } from "@/components/ui/progress"

const ProgressBar = ({ progress }) => {
  return (
    <div className="flex w-full flex-col">
      <span className="font-bold">{progress}%</span>
      <Progress value={progress} />
    </div>
  )
}

export default ProgressBar
