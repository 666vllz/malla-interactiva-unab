import { useEffect, useState } from "react"
import CourseList from "./components/CourseList"
import Header from "./components/Header"
import ProgressBar from "./components/ProgressBar"
import { mockup } from "./data/mockup"
import { Button } from "./components/ui/button"

function App() {
  const [courses, setCourses] = useState(mockup)
  const [approvedCourses, setApprovedCourses] = useState([])
  const [courseProgress, setCourseProgress] = useState(0)

  useEffect(() => {
    const parsedApprovedCourses = JSON.parse(
      localStorage.getItem("approvedCourses")
    )

    if (parsedApprovedCourses) {
      const updateCourses = courses.map((semester) =>
        semester.map((course) =>
          parsedApprovedCourses.includes(course.id)
            ? { ...course, approved: true }
            : course
        )
      )

      setCourses(updateCourses)
    }
  }, [])

  useEffect(() => {
    const updatedApprovedCourses = []
    for (let i = 0; i < courses.length; i++) {
      for (let j = 0; j < courses[i].length; j++) {
        if (courses[i][j].approved) {
          updatedApprovedCourses.push(courses[i][j].id)
        }
      }
    }

    setApprovedCourses(updatedApprovedCourses)
    localStorage.setItem(
      "approvedCourses",
      JSON.stringify(updatedApprovedCourses)
    )
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
    // const updatedCourses = courses.map((course) =>
    //   course.id === courseId
    //     ? { ...course, approved: !course.approved }
    //     : course
    // )

    const updatedCourses = courses.map((semester) =>
      semester.map((course) =>
        course.id === courseId
          ? { ...course, approved: !course.approved }
          : course
      )
    )

    setCourses(updatedCourses)
  }

  const clearApprovedCourses = () => {
    const updateCourses = courses.map((semester) =>
      semester.map((course) => ({ ...course, approved: false }))
    )
    console.log(updateCourses)
    setCourses(updateCourses)
    setApprovedCourses([])
  }

  const handleSemesterClick = (semesterIndex, approvedState) => {
    const updateCourses = []

    for (let i = 0; i < courses.length; i++) {
      if (i === semesterIndex) {
        const updateSemester = courses[i].map((course) => ({
          ...course,
          approved: approvedState,
        }))
        updateCourses.push(updateSemester)
      } else {
        updateCourses.push(courses[i])
      }
    }

    setCourses(updateCourses)
  }

  return (
    <div className="bg-[rgb(18,18,18)] font-inter text-gray-300 selection:bg-purple-800">
      <Header />
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
        <CourseList
          courses={courses}
          handleCourseClick={handleCourseClick}
          handleSemesterClick={handleSemesterClick}
        />
      </main>
    </div>
  )
}

export default App
