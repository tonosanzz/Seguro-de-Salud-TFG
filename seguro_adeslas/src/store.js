import { createStore } from 'redux';

const initialState = {
  user: {
    loggedIn: false,
    dni: '',
    email: '',
    passport: '',
  },
  // Otras propiedades que quieras incluir en el estado inicial
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_DNI':
      return {
        ...state,
        user: {
          loggedIn: true,
          dni: action.payload.dni,
          email: action.payload.email,
          passport: '',
          seguro: action.payload.seguro,
        },
      };
    case 'LOGIN_PASSPORT':
      return {
        ...state,
        user: {
          loggedIn: true,
          dni: '',
          email: action.payload.email,
          passport: action.payload.passport,
          seguro: action.payload.seguro,
      },

      }; 
    // Otros casos del switch que quieras agregar para manejar otras acciones
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;