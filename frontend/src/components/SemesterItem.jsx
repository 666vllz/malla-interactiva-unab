const SemesterItem = ({ semesterIndex, handleSemesterClick }) => {
  const handleClick = () => {
    handleSemesterClick(semesterIndex)
  }

  return (
    <h3
      onClick={handleClick}
      className="cursor-pointer select-none rounded border border-black/20 bg-[#A90429] py-2 text-center font-semibold text-white hover:border-blue-400"
    >
      Semestre {semesterIndex + 1}
    </h3>
  )
}

export default SemesterItem
