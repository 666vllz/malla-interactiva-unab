/* eslint-disable react/prop-types */
import CourseItemTest from "./CourseItemTest"

const CourseList = ({ courses }) => {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${courses.length}, minmax(0, 1fr))`,
      }}
      className="grid gap-2"
    >
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
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default CourseList
