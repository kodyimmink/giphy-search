import {types} from './types';

export const actions = {
    setSearchTerm(searchTerm){
        return {
            type: types.SET_SEARCH_TERM,
            payload: searchTerm
        }
    },
    setImagesArray(imagesArray){
        return {
            type: types.SET_IMAGES_ARRAY,
            payload: imagesArray
            }
        }
    }