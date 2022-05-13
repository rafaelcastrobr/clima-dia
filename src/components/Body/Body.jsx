import { useContext } from "react"
import { ApiContext } from "../../contexts/ApiProvider"
import styled from 'styled-components'

import MinMax from './Clima/MinMax'
import PeriodClima from "./Clima/PeriodClima"
import PeriodoClimaDepois from "./Clima/PeriodoClimaDepois"

const Loader = styled.span`
  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;

&::after {
  content: '';  
  left: 0;
  right: 0;
  margin: auto;
  bottom: 20px;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-color: #FF3D00 transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`

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
  const { state: { loading } } = useContext(ApiContext)

  return (
    <>
      {(loading) ?
        <Loader />
        : <ContentBody>
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
            <>
              <PeriodoClimaDepois />
            </>
          </div>
        </ContentBody>
      }

    </>
  )
}