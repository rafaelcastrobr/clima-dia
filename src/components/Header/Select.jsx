import { useContext } from 'react'
import styled from 'styled-components'
import { ApiContext } from '../../contexts/ApiProvider'

const SelectOpt = styled.select`
    margin: 0 1rem 0 2rem;
    height: 2rem;
    width: 35%;
    border: none;
    border-radius: 2px;
`




export default function Select() {

  const { state: { capital }, dispatch, } = useContext(ApiContext)
  console.log('dispatch: ', dispatch, capital);

  function handleSelect(e) {
    dispatch({ type: 'UPDATE', payload: {capital: e.target.value}})
  }


  return (

    <SelectOpt defaultValue={"São Paulo"} onChange={handleSelect}>
      <option value="Aracaju">ARACAJU</option>
      <option value="São Paulo">SÃO PAULO</option>
      <option value="Rio de Janeiro">RIO DE JANEIRO</option>
      <option value="Salvador">SALVADOR</option>
      <option value="Belo Horizonte">BELO HORIZONTE</option>
    </SelectOpt>

  )
}