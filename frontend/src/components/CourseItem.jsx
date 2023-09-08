import InfoIcon from "./InfoIcon"

const CourseItem = ({ code, courseName, credits, requirements }) => {
  return (
    <div className="inline-block rounded border border-white border-opacity-20 p-2">
      <div className="flex justify-end">
        <button>
          <InfoIcon />
        </button>
      </div>
      <div className="flex h-20 items-center justify-center">
        <h3 className="text-center font-bold">{courseName}</h3>
      </div>
    </div>
  )
}

export default CourseItem
