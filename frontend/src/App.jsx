import { useEffect, useState } from "react"
import CourseList from "./components/CourseList"
import Header from "./components/Header"
import ProgressBar from "./components/ProgressBar"
import { Button } from "./components/ui/button"
import { ArcherContainer } from "react-archer"

function App() {
  const [courses, setCourses] = useState([])
  const [approvedCourses, setApprovedCourses] = useState([])
  const [courseProgress, setCourseProgress] = useState(0)

  useEffect(() => {
    const parsedCourses = JSON.parse(localStorage.getItem("courses"))

    if (parsedCourses) {
      setCourses(parsedCourses)
    }
  }, [])

  useEffect(() => {
    const updatedApprovedCourses = []
    for (let i = 0; i < courses.length; i++) {
      for (let j = 0; j < courses[i].length; j++) {
        if (courses[i][j].APPROVED) {
          updatedApprovedCourses.push(courses[i][j].REGLA)
        }
      }
    }

    setApprovedCourses(updatedApprovedCourses)
    localStorage.setItem(
      "approvedCourses",
      JSON.stringify(updatedApprovedCourses)
    )

    localStorage.setItem("courses", JSON.stringify(courses))
  }, [courses])

  useEffect(() => {
    const calculateTotalCourses = () => {
      let total = 0
      for (let i = 0; i < courses.length; i++) {
        for (let j = 0; j < courses[i].length; j++) {
          total = total + 1
        }
      }
      return total
    }
    const totalCourses = calculateTotalCourses()
    const progressValue = (approvedCourses.length / totalCourses) * 100

    setCourseProgress(progressValue.toFixed(0))
  }, [approvedCourses])

  const handleCourseClick = (courseId) => {
    const updatedCourses = courses.map((semester) =>
      semester.map((course) =>
        course.REGLA === courseId
          ? { ...course, APPROVED: !course.APPROVED }
          : course
      )
    )

    setCourses(updatedCourses)
  }

  const clearApprovedCourses = () => {
    const updateCourses = courses.map((semester) =>
      semester.map((course) => ({ ...course, APPROVED: false }))
    )

    setCourses(updateCourses)
  }

  const handleSemesterClick = (semesterIndex) => {
    const updateCourses = []

    for (let i = 0; i < courses.length; i++) {
      if (i === semesterIndex) {
        const updateSemester = courses[i].map((course) => ({
          ...course,
          APPROVED: !course.APPROVED,
        }))
        updateCourses.push(updateSemester)
      } else {
        updateCourses.push(courses[i])
      }
    }

    setCourses(updateCourses)
  }

  return (
    <div className="bg-[rgb(18,18,18)] font-inter text-gray-300">
      <Header setCourses={setCourses} />
      <main className="container max-w-fit overflow-x-auto">
        <div className="flex items-end gap-4 py-4">
          <ProgressBar progress={courseProgress} />
          <Button
            className="rounded border border-white/20 bg-[#202020] transition-all duration-200 ease-in-out hover:border-red-400 hover:bg-[#202020]"
            onClick={clearApprovedCourses}
          >
            Limpiar
          </Button>
        </div>
        <ArcherContainer
          endMarker={false}
          svgContainerStyle={{ zIndex: 0 }}
          lineStyle="angle"
        >
          <CourseList
            courses={courses}
            handleCourseClick={handleCourseClick}
            handleSemesterClick={handleSemesterClick}
          />
        </ArcherContainer>
      </main>
    </div>
  )
}

export default App
