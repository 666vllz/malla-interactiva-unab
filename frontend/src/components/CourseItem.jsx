import { useState } from "react"
import CourseInfo from "./CourseInfo"
import { ArcherElement } from "react-archer"

const CourseItem = ({
  course,
  onClick,
  onMouseOver,
  onMouseLeave,
  hoveredCourse,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const courseCode = course.REGLA
  const courseName = course.NOMBRE_REGLA
  const courseCredits = course.CREDITOS
  const courseDescription = course.DESCRIPCION
  const requirements = course.PRERREQUISITOS
  const enablings = course.ENABLING
  const isApproved = course.APPROVED

  const handleMouseOver = () => {
    onMouseOver(course)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    onMouseLeave()
    setIsHovered(false)
  }

  const isRequirement =
    hoveredCourse && hoveredCourse.PRERREQUISITOS.includes(courseCode)
  const isEnabling =
    hoveredCourse && hoveredCourse.ENABLING.includes(courseCode)

  const bgColor = isApproved
    ? "bg-green-800"
    : isRequirement
    ? "bg-[#A90429]"
    : isEnabling
    ? "bg-[#A90429]"
    : "bg-[#03102C]"

  const isPartOfHover =
    isRequirement || isEnabling ? "opacity-100" : "opacity-30"

  const opacity = hoveredCourse && isPartOfHover

  const className = `${bgColor} ${opacity} text-white z-10 transition-all ease-in-out duration-100 relative inline-block w-32 rounded select-none hover:opacity-100 hover:border-blue-400`

  const getRelations = () => {
    const relations = []
    const relationsCode = []

    requirements.forEach((requirementCode) => {
      const newRelationObj = {
        targetId: requirementCode,
        targetAnchor: "right",
        sourceAnchor: "left",
        style: {
          strokeColor: "black",
          strokeWidth: 3,
        },
        className: isHovered ? "opacity-100" : "opacity-0",
      }

      relations.push(newRelationObj)
      relationsCode.push(requirementCode)
    })

    enablings.forEach((enabledCode) => {
      const newRelationObj = {
        targetId: enabledCode,
        targetAnchor: "left",
        sourceAnchor: "right",
        style: {
          strokeColor: "black",
          strokeWidth: 3,
        },
        className: isHovered ? "opacity-100" : "opacity-0",
      }

      if (!relationsCode.includes(enabledCode)) relations.push(newRelationObj)
    })

    return relations
  }

  return (
    <ArcherElement id={courseCode} relations={getRelations()}>
      <div className={className}>
        <div
          onClick={() => onClick(courseCode)}
          // onMouseOver={handleMouseOver}
          // onMouseLeave={handleMouseLeave}
          className="p-2"
        >
          <div className="h-20">
            <div className="mb-2 flex items-center justify-between">
              {/* <span className="flex h-5 w-5 items-center justify-center rounded-3xl bg-white px-2 font-bold text-black">
                {courseCredits ? courseCredits : ""}
              </span> */}
              <span className="flex h-5 items-center justify-center rounded bg-white px-2 font-bold text-black">
                {courseCode}
              </span>
            </div>
            <h3 className="break-words text-xs font-semibold">{courseName}</h3>
          </div>
          <div className="flex justify-between">
            <div
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              className="rounded border border-white px-4"
            >
              Condición
            </div>
            {/* <CourseRequirements requirements={requirements} /> */}
          </div>
        </div>
        <CourseInfo
          title={courseName}
          description={courseDescription}
          requirements={requirements}
          enablings={enablings}
          className="absolute bottom-[6px] right-1"
        />
      </div>
    </ArcherElement>
  )
}

export default CourseItem
