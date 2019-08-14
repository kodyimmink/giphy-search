export default (state = {}, action) => {
    switch (action.type) {
     case 'SET_IMAGES_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }