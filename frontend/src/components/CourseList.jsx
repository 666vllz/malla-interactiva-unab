import { useState } from "react"
import CourseItem from "./CourseItem"
import SemesterItem from "./SemesterItem"

const CourseList = ({ courses, handleCourseClick, handleSemesterClick }) => {
  const [hoveredCourseRequirements, setHoveredCourseRequirements] = useState([])
  const [hoveredCourseCode, setHoveredCourseCode] = useState(null)

  return (
    <div className="flex gap-2 text-xs">
      {courses.map((semester, index) => (
        <div key={index} className="inline-flex flex-col gap-2">
          <SemesterItem
            semesterIndex={index}
            handleSemesterClick={handleSemesterClick}
          />
          {semester.map((course) => (
            <CourseItem
              key={course.REGLA}
              courseId={course.REGLA}
              code={course.REGLA}
              courseName={course.NOMBRE_REGLA}
              requirements={course.PRERREQUISITOS}
              approved={course.APPROVED}
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
