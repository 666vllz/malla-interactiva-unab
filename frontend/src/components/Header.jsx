import { careers } from "../data/careers"
import { useState } from "react"
import CareersComboBox from "./CareersComboBox"
import YearComboBox from "./YearComboBox"

const formatCareers = () => {
  // Create a dictionary to store merged data
  const mergedCareers = {}

  // Iterate through the original list
  for (const career of careers) {
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

const Header = () => {
  const [selectedCareer, setSelectedCareer] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("")
  const [programOptions, setProgramOptions] = useState([])

  const formatedCareers = formatCareers()

  const handleSelectedCareer = (careerCode) => {
    const career = formatedCareers.filter(
      (career) => career.PROGRAMA === careerCode
    )

    setSelectedCareer(career[0].PROGRAMA)
    setProgramOptions(career[0].PERIODOS)
  }

  const handleSelectedProgram = (programCode) => {
    setSelectedProgram(programCode)
  }

  const handleClick = () => {
    alert(`codigo carrera: ${selectedCareer}\ncodigo malla: ${selectedProgram}`)
  }

  return (
    <header className="w-full border-b py-2">
      <div className="container flex h-12 items-center justify-between">
        <h2 className="font-bold">Ingeniería Civil Informática</h2>
        <div className="flex gap-4">
          {/* <ComboBox
            defaultText="Seleccionar carrera"
            notFoundText="Carrera no encontrada"
            options={formatedCareers}
            handleSelectedCareer={handleSelectedCareer}
          /> */}
          {/* <ComboBox
            defaultText="Seleccionar malla"
            notFoundText="Malla no encontrada"
            options={formatedCareers}
          /> */}
          <CareersComboBox
            options={formatedCareers}
            handleSelectedCareer={handleSelectedCareer}
          />
          <YearComboBox
            options={programOptions}
            handleSelectedProgram={handleSelectedProgram}
          />
          <button
            className="rounded border border-white bg-[#202020] px-4 hover:bg-zinc-300 hover:text-black"
            onClick={handleClick}
          >
            Buscar
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
