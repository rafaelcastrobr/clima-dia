import logo from '../../logo.png'
import styled from 'styled-components'
import Select from './Select'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15%;
  }

  option {
    background-color: white;
  }

  button {
    height: 2rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
`

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <Select /> 
      
    </Container>
  )
}

