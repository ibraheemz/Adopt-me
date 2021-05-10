import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    }
                                                        //getDerivedStateFromProps has to be static takes a set of props & dose some filtering on them then return what ever object that we want to be merged into the state
    static getDerivedStateFromProps({media}) {         
        let photos = ["http://placecorgi.com/600/600"]; 

        if (media.length) {
            photos = media.map(({ large }) => large)
        }
        return {photos};                              //return what ever object that we want to be merged into the state
    } 
    
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index   //dataset is a DOM API referes to data-index and it's always a string because it comes from the DOM
        });                                        //the + truns the string into a number 
    };

    render () {
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        <img 
                        key={photo}
                        onClick={this.handleIndexClick}
                        data-index= {index}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal-thumbnail"
                        />  
                    ))}
                </div>
            </div>
        )
    }

}

export default Carousel;