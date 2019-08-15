import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//REDUX
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

//API
import { searchGiphyAPI } from '../api';

//return promise?
// function cleanData(jsonData){
//     let imagesArray = [];
//     jsonData.data.forEach(function(item, index){
//         imagesArray.push(jsonData.data[index].images.original.webp)
//     })
//     return imagesArray;
// }

class Search extends React.Component {
    constructor(){
        super();
        
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
    }

    handleSearchChange(event){
        this.props.onSetSearchTerm(event.target.value);
    }

    handleSearchQuery(e){
        e.preventDefault();
        searchGiphyAPI(this.props.searchTerm)

        // .then(data => cleanData(data))

        .then(imagesArray => this.props.onSetImagesArray(imagesArray))
    }

    render(){
        return(
            <div className='wrap'>
                <form className='search' onSubmit={this.handleSearchQuery}>
                    <input type="text" className='searchTerm' placeholder='Search for a gif brah' onChange={this.handleSearchChange}></input>
                    <button type="submit" className='searchButton'>
                        <FontAwesomeIcon icon={ faSearch} /> 
                    </button>
                </form>
            </div>
        )
    }   
}


//REDUX STATE MAP
function mapStateToProps(state){
    return {
        searchTerm: state.searchTerm,
        imagesArray: state.imagesArray
    };
}

//REDUX ACTIONS MAP
function mapDispatchToProps(dispatch){
    return{
        onSetSearchTerm(searchTerm){
            dispatch(actions.setSearchTerm(searchTerm));
        },
        onSetImagesArray(imagesArray){
            dispatch(actions.setImagesArray(imagesArray));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

{/* <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?">
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div> */}