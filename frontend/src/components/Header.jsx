import ComboBox from "./ComboBox"
import { careers } from "../data/careers"

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
  console.log(careers)
  const formatedCareers = formatCareers()

  console.log(formatedCareers)

  return (
    <header className="w-full border-b">
      <div className="container flex h-12 items-center justify-between">
        <h2 className="font-bold">Ingeniería Civil Informática</h2>
        <ComboBox options={formatedCareers} />
        <ComboBox options={formatedCareers} />
      </div>
    </header>
  )
}

export default Header
