const API_KEY = '5oO5lLhtv9hsIC91N2feWW0GLONIysAs';
const API_URL = 'https://api.giphy.com/v1/gifs/search';
//add stickers URL
//possible feature addition later?

//use syntactic sugar to clean this up later
//call giphy api, return data
export function searchGiphyAPI(searchParameter){
    return new Promise((resolve) => {    
      resolve(
        fetch(`${API_URL}?q=${searchParameter}&api_key=${API_KEY}&limit=40`)
        .then(res => res.json())
        .then(data => {
          return data;
        }).catch(error => console.error(error))
        )
    });
  }
