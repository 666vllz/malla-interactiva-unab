import { useState } from "react"
import CourseItem from "./CourseItem"
import SemesterItem from "./SemesterItem"

const CourseList = ({ courses, handleCourseClick, handleSemesterClick }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null)

  const handleMouseOver = (course) => {
    setHoveredCourse(course)
  }

  const handleMouseLeave = () => {
    setHoveredCourse(null)
  }

  return (
    <div className="flex gap-6 text-xs">
      {courses.map((semester, index) => (
        <div key={index} className="inline-flex flex-col gap-6">
          <SemesterItem
            semesterIndex={index}
            handleSemesterClick={handleSemesterClick}
          />
          {semester.map((course) => (
            <CourseItem
              key={course.REGLA}
              course={course}
              onClick={handleCourseClick}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              hoveredCourse={hoveredCourse}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default CourseList
