import React from 'react';
import { connect } from 'react-redux';

//ACTIONS
import {searchAction} from '../actions/searchAction';
import {setImagesAction} from '../actions/setImagesAction';


import {searchGiphyAPI} from '../api';

const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
    searchAction: () => dispatch(searchAction()),
    setImagesAction: () => dispatch(setImagesAction())
   })

function cleanData(jsonData){
    let imagesArray = [];
    jsonData.data.forEach(function(item, index){
        imagesArray.push(jsonData.data[index].images.original.webp)
    })
    return imagesArray;
}

class Search extends React.Component {
    constructor(){
        super();
        
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
    }

    handleSearchChange = (event) => {

        //THE PROBLEM IS RIGHT HERE.
        //THIS DOES NOT SET THE SEARCH PARAMETER TO THE GLOBAL STATE.
        this.props.searchAction(event.target.value);
    }

    handleSearchQuery(e){
        e.preventDefault();
        searchGiphyAPI(this.props.searchParameter)
        .then(data => cleanData(data))
        .then(images => setImagesAction(images));
    }

    render(){
        return(        
        <div>
            
            <form onSubmit={this.handleSearchQuery}>
                <h3>Search</h3>
                <input type="text" name='searchInput' className="searchBox" placeholder='Search for a gif brah' value={this.props.searchParameter} onChange={this.handleSearchChange}></input>
                <button type="submit" className="button">Search</button>
            </form>
            
        </div>
        )
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

