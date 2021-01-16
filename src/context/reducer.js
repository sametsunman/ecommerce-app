
function reducer(state, action) {
  switch (action.type) {    
    case 'ADD_TO_FAVORITES':
      const index = state.favorites.findIndex((fav) => fav.id === action.payload.id);
      return index === -1
        ? {...state, favorites: [...state.favorites, action.payload]}
        : state;

      case 'REMOVE_FROM_FAVORITES':
          return state.filter((fav) => fav.id !== action.payload.id);
    

    default:
      return state;    
  }

  
}

export default reducer;
