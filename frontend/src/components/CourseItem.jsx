import { useState } from "react"
import CourseInfo from "./CourseInfo"
import CourseRequirements from "./CourseRequirements"
import { ArcherElement } from "react-archer"

const CourseItem = ({
  course,
  onClick,
  onMouseOver,
  onMouseLeave,
  hoveredCourse,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    onMouseOver(course)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    onMouseLeave()
    setIsHovered(false)
  }

  const courseCode = course.REGLA
  const courseName = course.NOMBRE_REGLA
  const requirements = course.PRERREQUISITOS
  const enablings = course.ENABLING
  const isApproved = course.APPROVED

  const isRequirement =
    hoveredCourse && hoveredCourse.PRERREQUISITOS.includes(courseCode)
  const isEnabling =
    hoveredCourse && hoveredCourse.ENABLING.includes(courseCode)

  const bgColor = isApproved
    ? "bg-green-800"
    : isRequirement
    ? "bg-blue-800"
    : isEnabling
    ? "bg-red-800"
    : "bg-neutral-900"

  const isPartOfHover =
    isRequirement || isEnabling ? "opacity-100" : "opacity-10"

  const opacity = hoveredCourse && isPartOfHover

  const className = `${bgColor} ${opacity} z-10 transition-all ease-in-out duration-100 relative inline-block w-32 rounded border border-white/20 bg-[#202020] select-none hover:opacity-100 hover:border-blue-400`

  const getRelations = () => {
    const relations = []
    enablings.forEach((enabledCode) => {
      const newRelationObj = {
        targetId: enabledCode,
        targetAnchor: "left",
        sourceAnchor: "right",
        style: {
          strokeColor: "white",
          strokeWidth: 1,
        },
        className: isHovered ? "opacity-100" : "opacity-0",
      }

      relations.push(newRelationObj)
    })

    return relations
  }

  return (
    <ArcherElement id={courseCode} relations={getRelations()}>
      <div className={className}>
        <div
          onClick={() => onClick(courseCode)}
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
    </ArcherElement>
  )
}

export default CourseItem
