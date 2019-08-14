export const setImagesAction = (imagesArray) => dispatch => {
    dispatch({
     type: 'SET_IMAGES_ACTION',
     payload: imagesArray
    })
   }