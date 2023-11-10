import { useEffect, useState } from "react"
import CareersComboBox from "./CareersComboBox"
import YearComboBox from "./YearComboBox"
import LogoUnab from "./LogoUnab"

const Header = ({ setCourses }) => {
  const [careers, setCareers] = useState([])
  const [selectedCareer, setSelectedCareer] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("")
  const [programOptions, setProgramOptions] = useState([])

  useEffect(() => {
    const formatCareers = (careersArr) => {
      const mergedCareers = {}

      for (const career of careersArr) {
        const key = `${career.PROGRAMA}_${career.DESCRIPCION}`

        if (!mergedCareers[key]) {
          mergedCareers[key] = {
            PROGRAMA: career.PROGRAMA,
            DESCRIPCION: career.DESCRIPCION,
            PERIODOS: [career.PERIODO],
          }
        } else {
          mergedCareers[key].PERIODOS.push(career.PERIODO)
        }
      }
      return Object.values(mergedCareers)
    }

    fetch("https://devlms.unab.cl/malla-api/programs")
      .then((res) => res.json())
      .then((data) => {
        const formatedCareers = formatCareers(data)
        setCareers(formatedCareers)
      })
  }, [])

  const handleSelectedCareer = (careerCode) => {
    const career = careers.filter((career) => career.PROGRAMA === careerCode)

    setSelectedCareer(career[0].PROGRAMA)
    setProgramOptions(career[0].PERIODOS)
  }

  const handleSelectedProgram = (programCode) => {
    setSelectedProgram(programCode)
  }

  const handleClick = () => {
    function groupByPriority(data) {
      const groupedData = {}

      data.forEach((item) => {
        const priority = item.PRIORIDAD

        if (!groupedData[priority]) {
          groupedData[priority] = []
        }

        groupedData[priority].push(item)
      })

      const result = Object.values(groupedData)
      return result
    }

    const url = `https://devlms.unab.cl/malla-api/program?program=${selectedCareer}&term=${selectedProgram}`
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const groupedCourses = groupByPriority(data)
        console.log(groupedCourses)
        setCourses(groupedCourses)
      })
  }

  return (
    <header className="w-full border-b py-2">
      <div className="container flex h-12 items-center justify-between">
        <div className="flex items-center justify-center">
          <LogoUnab />
          <h2 className="text-2xl font-bold">Malla interactiva</h2>
        </div>

        <div className="flex gap-4">
          {careers.length === 0 ? (
            <div className="flex w-[200px] items-center justify-center rounded border border-black/20 bg-white">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 animate-spin fill-blue-400 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <CareersComboBox
              options={careers}
              handleSelectedCareer={handleSelectedCareer}
            />
          )}

          <YearComboBox
            options={programOptions}
            defaultValue={selectedProgram}
            handleSelectedProgram={handleSelectedProgram}
          />
          <button
            className="rounded border border-black/20 bg-white px-4 outline-none hover:border-blue-400 focus:border-blue-400"
            onClick={handleClick}
            disabled={!(selectedCareer && selectedProgram)}
          >
            Buscar
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
