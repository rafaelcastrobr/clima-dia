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

  const { state: { periodo } } = useContext(ApiContext)
  
  return (
    <Container>
      
      <div>
        <p>{periodo.resumo}</p>
        
      </div>
    </Container>
  )
}
