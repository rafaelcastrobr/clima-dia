import { createContext, useReducer } from "react";
import period from "../time/period";
import data from "../time/date";

export const ApiContext = createContext();

const initial_state = {
  capital: 'São Paulo',
  dia_atual: data()['dia'],
  periodo: period(),
  data_escrita: data()['dataEscrita'],
  temp_max: '',
  temp_min: '',
  dia_semana: '',
  resumo: '',
}

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE': {
      const newState = {
        ... state,
        temp_max: action.payload[state.capital][state.data_escrita][state.periodo]['temp_max']
      }
      console.log('vim e fiquei')
      return newState;
    }
      default:
        return state;
  }
}


export default function Api({ children }) {
  const [state, dispatch] = useReducer(reducer, initial_state)

     fetch('https://apiprevmet3.inmet.gov.br/previsao/capitais')
      .then(resp => resp.json())
      .then(data => {
       //dispatch({ type: 'UPDATE', payload: data})
      })

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  )
}


// Criar os options e quando selecionar 1, ativar um dispatch de update que puxa outr api.
// Criar um dispath para os 2 primeiros dias e outro para os proximos