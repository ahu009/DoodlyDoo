import Store from '../store/recipes';

export const initialState = Store;

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case 'FAVOURITES_REPLACE': {
      return {
        ...state,
        favourites: action.data || [],
      };
    }
    case 'MEALS_REPLACE': {
      return {
        ...state,
        error: null,
        loading: false,
        meals: action.data,
      };
    }
    case 'RECIPES_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'RECIPES_REPLACE': {
      let recipes = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object' && Array.isArray(action.data)) {
        recipes = action.data.map(item => ({
          appointmentName: item.appointmentName,
          dates: item.dates,
          description: item.description,
          location: item.location,
          masterEmail: item.masterEmail,
          masterName: item.masterName,
        }));
      }

      return {
        ...state,
        error: null,
        loading: false,
        recipes,
      };
    }
    default:
      return state;
  }
}
