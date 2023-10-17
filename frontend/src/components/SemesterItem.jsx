import { useState } from "react"

const SemesterItem = ({ semesterIndex, handleSemesterClick }) => {
  const [isSemesterApproved, setIsSemesterApproved] = useState(false)

  const handleClick = () => {
    const newSemesterState = !isSemesterApproved
    handleSemesterClick(semesterIndex, newSemesterState)
    setIsSemesterApproved(newSemesterState)
  }

  const className = `${
    isSemesterApproved ? "border-green-300" : "border-white/20"
  } border py-2 cursor-pointer select-none rounded bg-[#202020] text-center hover:bg-[#303030] `

  return (
    <h3 onClick={handleClick} className={className}>
      Semestre {semesterIndex + 1}
    </h3>
  )
}

export default SemesterItem
