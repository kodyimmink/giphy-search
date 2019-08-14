export const searchAction = (searchParameter) => dispatch => {
    dispatch({
     type: 'SEARCH_ACTION',
     payload: searchParameter
    })
   }