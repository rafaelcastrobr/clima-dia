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

  const { dispatch } = useContext(ApiContext)

  function handleSelect(e) {
    dispatch({ type: 'UPDATE', payload: {capital: e.target.value}})
  }


  return (
    
    <SelectOpt defaultValue={"São Paulo"} onChange={handleSelect}>
      <option value="Aracaju">ARACAJU</option>
      <option value="Belém">BELÉM</option>
      <option value="Belo Horizonte">BELO HORIZONTE</option>
      <option value="Boa Vista">BOA VISTA</option>
      <option value="Brasília">BRASÍLIA</option>
      <option value="Campo Grande">CAMPO GRANDE</option>
      <option value="Cuiabá">CUIABÁ</option>
      <option value="Curitiba">CURITIBA</option>
      <option value="Florianópolis">FLORIANÓPOLIS</option>
      <option value="Fortaleza">FORTALEZA</option>
      <option value="Goiânia">GOIÂNIA</option>
      <option value="João Pessoa">JOÃO PESSOA</option>
      <option value="Macapá">MACAPÁ</option>
      <option value="Maceió">MACEIÓ</option>
      <option value="Manaus">MANAUS</option>
      <option value="Natal">NATAL</option>
      <option value="Palmas">PALMAS</option>
      <option value="Porto Alegre">PORTO ALEGRE</option>
      <option value="Porto Velho">PORTO VELHO</option>
      <option value="Recife">RECIFE</option>
      <option value="Rio Branco">RIO BRANCO</option>
      <option value="Rio de Janeiro">RIO DE JANEIRO</option>
      <option value="Salvador">SALVADOR</option>
      <option value="São Luís">SÃO LUÍS</option>
      <option value="São Paulo">SÃO PAULO</option>
      <option value="Teresina">TERESINA</option>
      <option value="Vitória">VITÓRIA</option>
    </SelectOpt>

  )
}