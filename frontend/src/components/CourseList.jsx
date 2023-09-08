import { useState } from "react"
import CourseItemTest from "./CourseItemTest"

const CourseList = ({ courses }) => {
  const [hoveredCourseRequirements, setHoveredCourseRequirements] = useState([])
  const [hoveredCourseCode, setHoveredCourseCode] = useState(null)

  return (
    <div className="container flex gap-2 overflow-x-scroll text-xs">
      {courses.map((semester, index) => (
        <div key={index} className="inline-flex flex-col gap-2">
          <h3 className="cursor-pointer rounded bg-[#202020] text-center hover:bg-[#303030]">
            Semestre {index + 1}
          </h3>
          {semester.map((course, index) => (
            <CourseItemTest
              key={index}
              code={course.code}
              courseName={course.courseName}
              credits={course.credits}
              requirements={course.requirements}
              hoveredCourseRequirements={hoveredCourseRequirements}
              setHoveredCourseRequirements={setHoveredCourseRequirements}
              hoveredCourseCode={hoveredCourseCode}
              setHoveredCourseCode={setHoveredCourseCode}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default CourseList
