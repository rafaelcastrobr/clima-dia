import { useContext } from "react"
import { ApiContext } from "../../contexts/ApiProvider"
import styled from 'styled-components'

import MinMax from './Clima/MinMax'
import PeriodClima from "./Clima/PeriodClima"

const ContentBody = styled.div`
  margin-left: 15px;

  .contentP {
    display: flex;
    align-items: center;
  }

  .boxContent {
    display: flex;
    justify-content: space-evenly;

  }

`
const ClassContentP = styled.p`
  font-size: 15px;
  margin-left: 10px;
  
  
`

export default function Body() {
  const { state: { periodo, capital } } = useContext(ApiContext)

  return (
    <ContentBody>
      <h1>{capital}</h1>

      <div>
        <div className="contentP">
          <h3>Hoje</h3>
          <ClassContentP>{periodo.periodo_hoje}</ClassContentP>
          <MinMax dia={0} />
        </div>
        <PeriodClima dia={'hoje'} />
      </div>

      <div>
        <div className="contentP">
          <h3>Amanhã</h3>
          <ClassContentP>{periodo.periodo_amanha}</ClassContentP>
          <MinMax dia={1} />
        </div>
        <PeriodClima dia={'amanha'} />
      </div>

      <div>
        <h3>Próximos Dias</h3>
        <div className="boxContent">
          <PeriodClima dia={'depoisM1'} />
          <PeriodClima dia={'depoisM2'} />
          <PeriodClima dia={'depoisM3'} />
        </div>
      </div>
    </ContentBody>

  )
}