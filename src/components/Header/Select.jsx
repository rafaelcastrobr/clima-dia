import styled from 'styled-components'

const SelectOpt = styled.select`
    margin: 0 1rem 0 2rem;
    height: 2rem;
    width: 35%;
    background-color: azure;
    border: none;
    border-radius: 2px;
`


export default function Select() {
  return (

    <SelectOpt>
      <option value="0">SÃO PAULO</option>
      <option value="0">RIO DE JANEIRO</option>
      <option value="0">SALVADOR</option>
      <option value="0">BELO HORIZONTE</option>
    </SelectOpt>

  )
}