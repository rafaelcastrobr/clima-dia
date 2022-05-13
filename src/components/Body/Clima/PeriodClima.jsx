import styled from 'styled-components'

import { useContext } from "react"
import { ApiContext } from "../../../contexts/ApiProvider"
import period from "../../../time/period"

import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";


const Box = styled.div`
  display: flex;
  justify-content: space-evenly;

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
      padding: 0 5px;
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


export default function PeriodClima(props) {
  const { state: { manha, tarde, noite, periodo, depoisM1, depoisM2, depoisM3 } } = useContext(ApiContext)

  return (
    <>
      {(props.dia === 'hoje') ?
        <Box>
          {(period() === 'manha') ?
            <div className="boxContent">
              <p className='pTitle'>Manhã</p>
              <img src={manha.manha_hoje.icone} alt={manha.manha_hoje.resumo} />
              <p>{manha.manha_hoje.resumo}</p>
            </div>
            : ''}

          {(period() === 'manha' || 'tarde') ?
            <div className="boxContent">
              <p className='pTitle'>Tarde</p>
              <img src={tarde.tarde_hoje.icone} alt={tarde.tarde_hoje.resumo} />
              <p>{tarde.tarde_hoje.resumo}</p>
            </div>
            : ''}

          <div className="boxContent">
            <p className='pTitle'>Noite</p>
            <img src={noite.noite_hoje.icone} alt={noite.noite_hoje.resumo} />
            <p>{noite.noite_hoje.resumo}</p>
          </div>
        </Box> : ''}

      {(props.dia === 'amanha') ?
        <Box>

          <div className="boxContent">
            <p className='pTitle'>Manhã</p>
            <img src={manha.manha_amanha.icone} alt={manha.manha_amanha.resumo} />
            <p>{manha.manha_amanha.resumo}</p>
          </div>

          <div className="boxContent">
            <p className='pTitle'>Tarde</p>
            <img src={tarde.tarde_amanha.icone} alt={tarde.tarde_amanha.resumo} />
            <p>{tarde.tarde_amanha.resumo}</p>
          </div>

          <div className="boxContent">
            <p className='pTitle'>Noite</p>
            <img src={noite.noite_amanha.icone} alt={noite.noite_amanha.resumo} />
            <p>{noite.noite_amanha.resumo}</p>
          </div>
        </Box> : ''}

      <Box>

        {(props.dia === 'depoisM1') ?

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

          : ''}

        {(props.dia === 'depoisM2') ?

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

          : ''}

        {(props.dia === 'depoisM3') ?

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

          : ''}

      </Box>

    </>
  )
}