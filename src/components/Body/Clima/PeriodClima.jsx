import { useContext } from "react"
import { ApiContext } from "../../../contexts/ApiProvider"


export default function PeriodClima(props) {
  const { state: { manha, tarde, noite } } = useContext(ApiContext)

  return (
    <div>
      {console.log(props.dia)}
      {(props.dia === 'hoje') ?
        <div>
          <h2>Manhã</h2>
            {manha.manha_hoje.resumo}
          <h2>Tarde</h2>
            {tarde.tarde_hoje.resumo}
          <h2>Noite</h2>
            {noite.noite_hoje.resumo}
        </div> :''}

        {(props.dia === 'amanha') ?
        <div>
          <h2>Manhã</h2>
            {manha.manha_amanha.resumo}
          <h2>Tarde</h2>
            {tarde.tarde_amanha.resumo}
          <h2>Noite</h2>
            {noite.noite_amanha.resumo}
        </div> :''}

        
    </div>
  )
}