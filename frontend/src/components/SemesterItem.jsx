const SemesterItem = ({ semesterIndex, handleSemesterClick }) => {
  const handleClick = () => {
    handleSemesterClick(semesterIndex)
  }

  return (
    <h3
      onClick={handleClick}
      className="cursor-pointer select-none rounded border border-white/20 bg-[#202020] py-2 text-center hover:border-blue-400"
    >
      Semestre {semesterIndex + 1}
    </h3>
  )
}

export default SemesterItem
