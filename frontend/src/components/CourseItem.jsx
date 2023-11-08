import CourseInfo from "./CourseInfo"
import CourseRequirements from "./CourseRequirements"

const CourseItem = ({
  courseId,
  code,
  courseName,
  requirements,
  approved,
  hoveredCourseRequirements,
  setHoveredCourseRequirements,
  hoveredCourseCode,
  setHoveredCourseCode,
  handleClick,
}) => {
  const isPrevRequirement = hoveredCourseRequirements.includes(code)
  const isNextRequirement = requirements.includes(hoveredCourseCode)

  const handleMouseOver = () => {
    setHoveredCourseRequirements(requirements)
    setHoveredCourseCode(code)
  }

  const handleMouseLeave = () => {
    setHoveredCourseRequirements([])
    setHoveredCourseCode(null)
  }

  const prevRequirementStyle = `bg-blue-400/80 transition-all duration-300 ease-in-out`

  const nextRequirementStyles = `bg-red-400/80 transition-all duration-300 ease-in-out`

  const className = `relative inline-block w-32 rounded border border-white bg-[#202020] hover:border-opacity-100 select-none ${
    approved ? " bg-green-300 text-black" : ""
  } ${
    isPrevRequirement
      ? prevRequirementStyle
      : isNextRequirement
      ? nextRequirementStyles
      : "border-opacity-20"
  }`

  return (
    <div className={className}>
      <div
        onClick={() => handleClick(courseId)}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className="p-2"
      >
        <div className="h-14">
          <h3 className="break-words text-xs font-semibold">{courseName}</h3>
        </div>
        <div className="flex justify-between">
          <CourseRequirements requirements={requirements} />
        </div>
      </div>
      <CourseInfo
        title={courseName}
        className="absolute bottom-[6px] right-1"
      />
    </div>
  )
}

export default CourseItem
