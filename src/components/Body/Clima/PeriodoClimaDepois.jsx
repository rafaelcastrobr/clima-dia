import { useContext } from "react"
import { ApiContext } from "../../../contexts/ApiProvider"
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import styled from 'styled-components'

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  column-gap: 3rem;
  row-gap: 3rem;
  padding: 20px;

  .contentCenter {
    justify-content: center;
  }

  .boxContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0px solid black;
    box-shadow: 5px -5px 50px -15px #5C3EA0;
    background-color: #f5dfca;
    border-radius: 10px;
    width: 180px;
    height: auto;

  .boxTemp {
    display: flex;
  }

  .pTitle {
    font-size: 16px;
    font-weight: bold;
  }

    img {
      width: 50px;
    }

    p {
      padding: 0 3px;
      text-align: center;
      font-size: 12px;

      .spanRed {
        color: #850f0f;
        font-size: 18px;
      }
      .spanBlue {
        color: #4d4de0;
        font-size: 18px;

      }
    }

   
  }
  
`

export default function PeriodoClimaDepois(props) {
  const { state: { periodo, depoisM1, depoisM2, depoisM3 } } = useContext(ApiContext)


  return (
    <Box>
     
        <div className="boxContent">
          <p className='pTitle'>{depoisM1.dia_semana}</p>
          <p >{periodo.periodo_depoisM1}</p>
          <img src={depoisM1.icone} alt={depoisM1.resumo} />
          <p>{depoisM1.resumo}</p>
          <div className='boxTemp'>
            <p><span className='spanRed'><FaTemperatureHigh /></span> {depoisM1.temp_max}</p>
            <p><span className='spanBlue'><FaTemperatureLow /></span> {depoisM1.temp_min}</p>
          </div>
        </div>

        <div className="boxContent">
          <p className='pTitle'>{depoisM2.dia_semana}</p>
          <p>{periodo.periodo_depoisM2}</p>
          <img src={depoisM2.icone} alt={depoisM2.resumo} />
          <p>{depoisM2.resumo}</p>
          <div className='boxTemp'>
            <p><span className='spanRed'><FaTemperatureHigh /></span> {depoisM2.temp_max}</p>
            <p><span className='spanBlue'><FaTemperatureLow /></span> {depoisM2.temp_min}</p>
          </div>
        </div>

        <div className="boxContent">
          <p className='pTitle'>{depoisM3.dia_semana}</p>
          <p>{periodo.periodo_depoisM3}</p>
          <img src={depoisM3.icone} alt={depoisM3.resumo} />
          <p>{depoisM3.resumo}</p>
          <div className='boxTemp'>
            <p><span className='spanRed'><FaTemperatureHigh /></span> {depoisM3.temp_max}</p>
            <p><span className='spanBlue'><FaTemperatureLow /></span> {depoisM3.temp_min}</p>
          </div>
        </div>

    </Box>
  )
}