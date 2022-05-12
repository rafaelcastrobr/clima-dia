import { useContext } from "react"
import { ApiContext } from "../../contexts/ApiProvider"
import ContentClima from "./Clima/ContentClima"

export default function Body() {
  const {state: {capital}} = useContext(ApiContext)
  
  return (
    <div>
      <div>
        <h2>{capital} - Hoje</h2>
        <ContentClima />
      </div>
      
    </div>

  )
}