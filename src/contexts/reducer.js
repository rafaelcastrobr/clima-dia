import period from "../time/period";
import data from "../time/date";


export const initial_state = {
  capital: 'São Paulo',
  dia_atual: data()['dia'],
  periodo: period(),
  data_escrita: data()['dataEscrita'],
  temp_max: '...',
  temp_min: '...',
  dia_semana: data()['dia_semana'],
  resumo: '...',
  toggle: true,
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE': {
      const newState = {
        ...state,
        capital: action.payload,
        resumo: '...',
        temp_max: '...',
        temp_min: '...',
        toggle: true,
      }
      return newState;
    }
    case 'API_UP': {
      const newState = {
        ...state,
        resumo: action.data[state.data_escrita][state.periodo]['resumo'],
        temp_max: action.data[state.data_escrita][state.periodo]['temp_max'],
        temp_min: action.data[state.data_escrita][state.periodo]['temp_min'],
        cidade: state.capital,
        toggle: action.tog,
      }
      return newState;
    }

    default:
      return state;
  }
}