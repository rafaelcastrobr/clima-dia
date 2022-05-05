import date from "../../../time/date"
import Capitais from "../../../api/api"

import styled from 'styled-components'

const Container = styled.div`
  display: flex;

  p {
    margin-right: 25px;
  }
`

export default function MinMax () {
  const {dia_semana, temp_max, temp_min} = Capitais()
  
  return (
    <Container>
      <p>{date()} - {dia_semana}</p>
      <p>Max: {temp_max}</p>
      <p>Min: {temp_min}</p>
    </Container>
  )
}