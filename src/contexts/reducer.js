import period from "../time/period";
import data from "../time/date";


export const initial_state = {
  capital: 'São Paulo',
  periodo: {},
  data_escrita: data()['dataEscrita'],
  temp_max: '',
  temp_min: '',
  dia_semana_Data: data()['dia_semana'],
  resumo: '',
  toggle: true,
  hoje: '',
  manha: {
    manha_hoje: '',
    manha_amanha: '',
  },
  tarde: {
    tarde_hoje: '',
    tarde_amanha: '',
  },
  noite: {
    noite_hoje: '',
    noite_amanha: '',
  },
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE': {
      const newState = {
        ...state,
        capital: action.payload.capital,
        resumo: '.',
        periodo: {
          periodo_hoje: '',
        },
        manha: {
          manha_hoje: '',
          manha_amanha: '',
        },
        tarde: {
          tarde_hoje: '',
          tarde_amanha: '',
        },
        noite: {
          noite_hoje: '',
          noite_amanha: '',
        },
        toggle: true,
      }
      return newState;
    }
    case 'API_UP': {
      const newState = {
        ...state,
        periodo: {
          periodo_hoje: Object.keys(action.payload.data)[0],
          periodo_amanha: Object.keys(action.payload.data)[1],
          periodo_depoisM1: Object.keys(action.payload.data)[2],
          periodo_depoisM2: Object.keys(action.payload.data)[3],
          periodo_depoisM3: Object.keys(action.payload.data)[4]
        },
        hoje: action.payload.data[Object.keys(action.payload.data)[0]],
        amanha: action.payload.data[Object.keys(action.payload.data)[1]],
        depoisM1: action.payload.data[Object.keys(action.payload.data)[2]],
        depoisM2: action.payload.data[Object.keys(action.payload.data)[3]],
        depoisM3: action.payload.data[Object.keys(action.payload.data)[4]],
        toggle: action.payload.tog,

      }
      const apiNewState = {
        ...newState,
        manha: {
          manha_hoje: newState.hoje[Object.keys(newState.hoje)[0]],
          manha_amanha: newState.amanha[Object.keys(newState.amanha)[0]]
        },
        tarde: {
          tarde_hoje: newState.hoje[Object.keys(newState.hoje)[1]],
          tarde_amanha: newState.amanha[Object.keys(newState.amanha)[1]],
        },
        noite: {
          noite_hoje: newState.hoje[Object.keys(newState.hoje)[2]],
          noite_amanha: newState.amanha[Object.keys(newState.amanha)[2]],
        },
        toggle: action.payload.tog,
      }
      return apiNewState;
    }

    default:
      return state;
  }
}