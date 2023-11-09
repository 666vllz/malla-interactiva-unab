import CourseInfo from "./CourseInfo"
import CourseRequirements from "./CourseRequirements"

const CourseItem = ({
  course,
  handleClick,
  handleMouseOver,
  handleMouseLeave,
  hoveredCourse,
}) => {
  const courseCode = course.REGLA
  const courseName = course.NOMBRE_REGLA
  const requirements = course.PRERREQUISITOS
  const isApproved = course.APPROVED

  const isRequirement =
    hoveredCourse && hoveredCourse.PRERREQUISITOS.includes(courseCode)
  const isEnabling =
    hoveredCourse && hoveredCourse.ENABLING.includes(courseCode)

  const bgColor = isApproved
    ? "bg-green-400/60"
    : isRequirement
    ? "bg-blue-600/60"
    : isEnabling
    ? "bg-red-600/60"
    : "bg-neutral-900"

  const isPartOfHover =
    isRequirement || isEnabling ? "opacity-100" : "opacity-20"

  const opacity = hoveredCourse ? isPartOfHover : "opacity-100"

  const className = `${bgColor} ${opacity} transition-all ease-in-out duration-100 relative inline-block w-32 rounded border border-white/20 bg-[#202020] hover:border-opacity-100 select-none hover:bg-[#333333] hover:opacity-100`

  return (
    <div className={className}>
      <div
        onClick={() => handleClick(courseCode)}
        onMouseOver={() => handleMouseOver(course)}
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
