import period from "../time/period";
import data from "../time/date";


export const initial_state = {
  capital: 'São Paulo',
  periodo: period(),
  data_escrita: data()['dataEscrita'],
  temp_max: '...',
  temp_min: '...',
  dia_semana_Data: data()['dia_semana'],
  resumo: '...',
  toggle: true,
  hoje: '...',
  manha: '...',
  tarde: '...',
  noite: '...',
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE': {
      const newState = {
        ...state,
        capital: action.payload.capital,
        resumo: '...',
        manha: '...',
        tarde: '...',
        noite: '...',
        toggle: true,
      }
      return newState;
    }
    case 'API_UP': {
      const newState = {
        ...state,
        hoje: action.payload.data[Object.keys(action.payload.data)[0]],
        amanha: action.payload.data[Object.keys(action.payload.data)[1]][state.periodo],
        toggle: action.payload.tog,

      }
      const newNewState = {
        ...state,
        manha: newState.hoje[Object.keys(newState.hoje)[0]],
        tarde: newState.hoje[Object.keys(newState.hoje)[1]],
        noite: newState.hoje[Object.keys(newState.hoje)[2]],
        toggle: action.payload.tog,
      }
      return newNewState;
    }

    default:
      return state;
  }
}