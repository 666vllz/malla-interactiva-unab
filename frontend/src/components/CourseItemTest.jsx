import CourseInfo from "./CourseInfo"
import CourseRequirements from "./CourseRequirements"

const CourseItemTest = ({
  code,
  courseName,
  credits,
  requirements,
  hoveredCourseRequirements,
  setHoveredCourseRequirements,
  hoveredCourseCode,
  setHoveredCourseCode,
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

  const prevRequirementStyle = `bg-[rgba(255,255,255,0.8)] text-[#121212] transition-all duration-300 ease-in-out`

  const nextRequirementStyles = `bg-[rgba(255,255,255,0.8)] text-[#121212] transition-all duration-300 ease-in-out`

  const className = `inline-block w-32 rounded border border-white bg-[#202020] p-2 ${
    isPrevRequirement
      ? prevRequirementStyle
      : isNextRequirement
      ? nextRequirementStyles
      : "border-opacity-20"
  }`

  return (
    <div
      className={className}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
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
