import CourseList from "./components/CourseList"
import Header from "./components/Header"
import { courses } from "./data/courses"

function App() {
  return (
    <div className="min-h-screen bg-[#121212] font-inter text-gray-300">
      <Header />
      <main className="container m-auto py-2 text-xs">
        <CourseList courses={courses} />
      </main>
    </div>
  )
}

export default App
