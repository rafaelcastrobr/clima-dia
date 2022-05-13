import { useContext } from "react"
import { ApiContext } from "../../contexts/ApiProvider"
import ContentClima from "./Clima/ContentClima"
import MinMax from './Clima/MinMax'

export default function Body() {
  const { state: { capital } } = useContext(ApiContext)
  
  return (
    <div>
      <div>
        <h2>{capital} - Hoje</h2>
        <MinMax dia={0}/>
        <ContentClima dia={'hoje'} />
      </div>
      <div>
        <h2>{capital} - Amanhã</h2>
        <MinMax dia={1}/>
        <ContentClima dia={'amanha'}/>
      </div>
      
    </div>

  )
}