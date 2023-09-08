import CourseInfo from "./CourseInfo"
import CourseRequirements from "./CourseRequirements"

const CourseItemTest = ({ code, courseName, credits, requirements }) => {
  return (
    <div className="inline-block w-32 rounded border border-white border-opacity-20 bg-[#202020] p-2">
      <div className="h-14">
        <h3 className="font-bold">{courseName}</h3>
      </div>
      <div className="flex justify-between">
        <CourseRequirements requirements={requirements} />
        <CourseInfo title={courseName} />
      </div>
    </div>
  )
}

export default CourseItemTest
