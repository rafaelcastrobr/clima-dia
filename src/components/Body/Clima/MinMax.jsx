import styled from 'styled-components'

import { ApiContext } from '../../../contexts/ApiProvider'
import { useContext } from "react"

const Container = styled.div`
  display: flex;

  p {
    margin-right: 25px;
  }
`


export default function MinMax(props) {
  const { state: { dia_semana, data_escrita, capital, resumo, temp_max, temp_min }} = useContext(ApiContext)  
  
  return (
    <Container>
      <p>{data_escrita} - {dia_semana}</p>
      <p>Resumo: {resumo}</p>
      <p>Temp Max {temp_max} / Temp Min {temp_min}</p>
    </Container>
  )
}

//['São Paulo'][`${dia}/${mes}/${ano}`][period()]
