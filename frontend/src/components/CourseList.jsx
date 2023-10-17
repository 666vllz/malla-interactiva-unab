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
