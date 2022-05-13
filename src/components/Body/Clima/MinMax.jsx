import styled from 'styled-components'

import { ApiContext } from '../../../contexts/ApiProvider'
import { useContext } from "react"

import period from '../../../time/period'

const Container = styled.div`
  display: flex;

  p {
    margin-right: 25px;
  }
`


export default function MinMax(props) {

  const { state: { manha, tarde, noite, periodo } } = useContext(ApiContext)
  const pe = period()

  return (
    <Container>

      {(+props.dia === 0) ?
        <>
          {(period() === 'manha') ?
            <div>
              <p>/\ {manha.manha_hoje.temp_max}</p>
              <p>\/ {manha.manha_hoje.temp_min}</p>
            </div>

            : ''}

          {(period() === 'tarde') ?
            <div>
              <p>/\ {tarde.tarde_hoje.temp_max}</p>
              <p>\/ {tarde.tarde_hoje.temp_min}</p>
            </div>

            : ''}

          {(period() === 'noite') ?
            <div>
              <p>/\ {noite.noite_hoje.temp_max}</p>
              <p>\/ {noite.noite_hoje.temp_min}</p>
            </div>

            : ''}
        </>
        : ''}

      {(+props.dia === 1) ?
        <>
          {(period() === 'manha') ?
            <div>
              <p>/\ {manha.manha_amanha.temp_max}</p>
              <p>\/ {manha.manha_amanha.temp_min}</p>
            </div>

            : ''}

          {(period() === 'tarde') ?
            <div>
              <p>/\ {tarde.tarde_amanha.temp_max}</p>
              <p>\/ {tarde.tarde_amanha.temp_min}</p>
            </div>

            : ''}

          {(period() === 'noite') ?
            <div>
              <p>/\ {noite.noite_amanha.temp_max}</p>
              <p>\/ {noite.noite_amanha.temp_min}</p>
            </div>

            : ''}
        </>
        : ''}

    </Container>
  )
}
