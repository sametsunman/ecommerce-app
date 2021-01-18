
function reducer(state, action) {
  switch (action.type) {
    case 'SET_STATE_FROM_STORAGE':
      return action.payload ? action.payload : state;
    case 'ADD_TO_FAVORITES':
      let favIndex = state.favorites.findIndex((fav) => fav.id === action.payload.id);
      return favIndex === -1
        ? { ...state, favorites: [...state.favorites, action.payload] }
        : state;
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter((fav) => fav.id !== action.payload.id) }
    case 'ADD_TO_BASKET':
      let basketIndex = state.orderBasket.findIndex((order) => order.id === action.payload.id);
      return basketIndex === -1
        ? { ...state, orderBasket: [...state.orderBasket, action.payload] }
        : state;
    case 'REMOVE_FROM_BASKET':
      return { ...state, orderBasket: state.orderBasket.filter((order) => order.id !== action.payload.id) }
    case 'ORDER_NOW':
        return { ...state, orderBasket: [], orderHistory: action.payload }



    default:
      return state;
  }


}

export default reducer;
