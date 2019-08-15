import React from 'react';

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
        <div>
            
            <form onSubmit={this.handleSearchQuery}>
                <h3>Search</h3>
                <input type="text" placeholder='Search for a gif brah' onChange={this.handleSearchChange}></input>
                <button type="submit">Search</button>
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

