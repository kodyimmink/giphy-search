import { types } from './types';
import { initialState } from './initialState';

export default (state = initialState, action) => {
    switch (action.type) {
      case types.SET_SEARCH_TERM: {
        return {
          ...state,
          searchTerm: action.payload
        }
      } 
      case types.SET_IMAGES_ARRAY: {
        return {
          ...state,
          imagesArray: action.payload,
          haveImageData: true
        }
      }
      default:
        return state
    }
  }