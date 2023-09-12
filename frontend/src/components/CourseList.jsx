import { useState } from "react"
import CourseItem from "./CourseItem"

const CourseList = ({ courses, handleCourseClick }) => {
  const [hoveredCourseRequirements, setHoveredCourseRequirements] = useState([])
  const [hoveredCourseCode, setHoveredCourseCode] = useState(null)

  return (
    <div className="flex gap-2 text-xs">
      {courses.map((semester, index) => (
        <div key={index} className="inline-flex flex-col gap-2">
          <h3 className="cursor-pointer rounded bg-[#202020] text-center hover:bg-[#303030]">
            Semestre {index + 1}
          </h3>
          {semester.map((course) => (
            <CourseItem
              key={course.id}
              courseId={course.id}
              code={course.code}
              courseName={course.courseName}
              credits={course.credits}
              requirements={course.requirements}
              approved={course.approved}
              hoveredCourseRequirements={hoveredCourseRequirements}
              setHoveredCourseRequirements={setHoveredCourseRequirements}
              hoveredCourseCode={hoveredCourseCode}
              setHoveredCourseCode={setHoveredCourseCode}
              handleClick={handleCourseClick}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default CourseList
