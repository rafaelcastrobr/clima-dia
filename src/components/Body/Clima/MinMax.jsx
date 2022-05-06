import Api from "../../../api/api"
import data from "../../../time/date"

import styled from 'styled-components'
import period from "../../../time/period"

const Container = styled.div`
  display: flex;

  p {
    margin-right: 25px;
  }
`


export default function MinMax(props) {
  //const proxDia = props.proxDia
  const { dia, mes, ano } = data()
  
  const { dia_semana, temp_max, temp_min } = Api()[`${dia}/${mes}/${ano}`][period()]


  return (
    <Container>
      <p>{`${dia}/${mes}/${ano}`} - {dia_semana} - {period()}</p>
      <p>Max: {temp_max}</p>
      <p>Min: {temp_min}</p>
    </Container>
  )
}

//['São Paulo'][`${dia}/${mes}/${ano}`][period()]
