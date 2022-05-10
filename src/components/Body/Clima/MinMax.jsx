
import data from "../../../time/date"
import period from "../../../time/period"


import styled from 'styled-components'

import { ApiContext } from "../../../api/api"
import { useContext } from "react"

const Container = styled.div`
  display: flex;

  p {
    margin-right: 25px;
  }
`


export default function MinMax(props) {
  const { state: { temp_max }} = useContext(ApiContext)  
  
  return (
    <Container>
      <p>Tem Max { temp_max }</p>
    </Container>
  )
}

//['São Paulo'][`${dia}/${mes}/${ano}`][period()]
