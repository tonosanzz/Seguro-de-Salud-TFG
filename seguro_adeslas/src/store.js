import { createStore } from 'redux';

const initialState = {
  user: {
    loggedIn: false,
    dni: '',
    password: '',
    email: '',
    poliza: '',
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
          password: action.payload.password,
          email: action.payload.email,
          poliza: '',
          seguro: action.payload.seguro,
        },
      };
    case 'LOGIN_POLIZA':
      return {
        ...state,
        user: {
          loggedIn: true,
          dni: '',
          password: '',
          email: action.payload.email,
          poliza: action.payload.poliza,
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