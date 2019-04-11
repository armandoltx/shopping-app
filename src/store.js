import {createStore} from 'redux';

const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART"){
    // si esto pasa tenemos que retornar un nuevo estado
    return {
      ...state,
      cart: state.cart.concat(action.product)
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    console.log("here");
    console.log(action.product.id);
    return {
      ...state,
      cart: state.cart.filter(product => product.id !== action.product.id)
    }
  }

  return state;
}

export default createStore(reducer, { cart: [] });
// a createStore se le pasa el reducer y el estado inicial, q en este caso es un array vacio