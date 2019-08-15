import React from 'react';

//REDUX
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

class ImagesContainer extends React.Component {
    constructor(){
        super();

        this.createImageElements = this.createImageElements.bind(this);
    }

    
    createImageElements(){
        return (
            <div className='imageContainer'>
                {
                    this.props.imagesArray.data.map( 
                        image => { return (
                        <div key={image.id}>
                            <img className='image' width={300} height={300} src={image.images.original.url} /> 
                        </div>
                        )
                        }
                    )
                }
            </div>
        )
    }

    render(){
        return(
            <div>
                {
                    (this.props.haveImageData === true) ?
                        this.createImageElements() : <h3>search for something brah</h3>
                }
            </div>
            
        )
    }

}

//REDUX STATE MAP
function mapStateToProps(state){
    return {
        imagesArray: state.imagesArray,
        haveImageData: state.haveImageData
    };
}


//REDUX ACTIONS MAP
function mapDispatchToProps(dispatch){
    return{
        onSetImagesArray(imagesArray){
            dispatch(actions.setImagesArray(imagesArray));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);

