import CourseList from "./components/CourseList"
import Header from "./components/Header"
import { courses } from "./data/courses"

function App() {
  return (
    <div className="font-inter bg-[#121212] text-gray-300">
      <Header />
      <main>
        <CourseList courses={courses} />
      </main>
    </div>
  )
}

export default App
