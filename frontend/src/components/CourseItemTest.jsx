/* eslint-disable react/prop-types */
import CourseInfo from "./CourseInfo"

const CourseItemTest = ({ code, courseName, credits, requirements }) => {
  return (
    <div className="inline-block rounded border border-white border-opacity-20 bg-[#202020] p-2">
      <div className="h-20">
        <h3 className="font-bold">{courseName}</h3>
      </div>
      <div className="flex justify-between">
        <button className="rounded border border-white border-opacity-20 px-2 py-1">
          Requisitos
        </button>
        <CourseInfo title={courseName} />
      </div>
    </div>
  )
}

export default CourseItemTest
