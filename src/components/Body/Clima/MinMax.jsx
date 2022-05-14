import styled from 'styled-components'
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

import { ApiContext } from '../../../contexts/ApiProvider'
import { useContext } from "react"

import period from '../../../time/period'

const Container = styled.div`
  display: flex;
  margin-left: 10px;

  p {
    margin-right: 10px;
  }

  .contentTemp {
    display: flex;
  }

  .spanRed {
    color: #850f0f;
  }
  .spanBlue {
    color: #4d4de0
  }
`



export default function MinMax(props) {

  const { state: { manha, tarde, noite } } = useContext(ApiContext)

  return (
    <Container>

      {(+props.dia === 0) ?
        <>
          {(period() === 'manha') ?
            <div className='contentTemp'>
              <p><span className='spanRed'><FaTemperatureHigh /></span> {manha.manha_hoje.temp_max}</p>
              <p><span className='spanBlue'><FaTemperatureLow /></span> {manha.manha_hoje.temp_min}</p>
            </div>

            : ''}

          {(period() === 'tarde') ?
            <div className='contentTemp'>
              <p><span className='spanRed'><FaTemperatureHigh /></span> {tarde.tarde_hoje.temp_max}</p>
              <p><span className='spanBlue'><FaTemperatureLow /></span> {tarde.tarde_hoje.temp_min}</p>
            </div>

            : ''}

          {(period() === 'noite') ?
            <div className='contentTemp'>
              <p><span className='spanRed'><FaTemperatureHigh /></span> {noite.noite_hoje.temp_max}</p>
              <p><span className='spanBlue'><FaTemperatureLow /></span> {noite.noite_hoje.temp_min}</p>
            </div>

            : ''}
        </>
        : ''}

      {(+props.dia === 1) ?
        <>
          {(period() === 'manha') ?
            <div className='contentTemp'>
              <p><span className='spanRed'><FaTemperatureHigh /></span> {manha.manha_amanha.temp_max}</p>
              <p><span className='spanBlue'><FaTemperatureLow /></span> {manha.manha_amanha.temp_min}</p>
            </div>

            : ''}

          {(period() === 'tarde') ?
            <div className='contentTemp'>
              <p><span className='spanRed'><FaTemperatureHigh /></span> {tarde.tarde_amanha.temp_max}</p>
              <p><span className='spanBlue'><FaTemperatureLow /></span> {tarde.tarde_amanha.temp_min}</p>
            </div>

            : ''}

          {(period() === 'noite') ?
            <div className='contentTemp'>
              <p><span className='spanRed'><FaTemperatureHigh /></span> {noite.noite_amanha.temp_max}</p>
              <p><span className='spanBlue'><FaTemperatureLow /></span> {noite.noite_amanha.temp_min}</p>
            </div>

            : ''}
        </>
        : ''}

    </Container>
  )
}
