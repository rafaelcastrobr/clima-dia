import { createContext, useReducer } from "react";

import reducer, { initial_state } from "./reducer";

export const ApiContext = createContext();


export default function ApiProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial_state)

  if (state.toggle) {
    fetch('https://apiprevmet3.inmet.gov.br/previsao/capitais')
      .then(resp => resp.json())
      .then(data => {

        dispatch({ type: 'API_UP', data: data[state.capital], tog: false })

      })
  }

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  )
}


// Criar os options e quando selecionar 1, ativar um dispatch de update que puxa outr api.
// Criar um dispath para os 2 primeiros dias e outro para os proximos