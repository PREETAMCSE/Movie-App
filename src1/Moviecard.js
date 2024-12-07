import React from "react";

class MovieCard extends React.Component{

    

    // addStars(){
    //     this.state.stars+=0.5;
    //     console.log("Current state : ", this.state);
    // }

    addStars=()=>{
         // form 1 of using setState
        //  this.setState({
        //     stars : this.state.stars+0.5
        //  });

        // form 2 for setting states 
        if(this.state.stars>=5){
            this.state.stars = 5;
            return;
        }
        this.setState((prevState) => {
            return {
                stars : prevState.stars+0.5
            }
        })

         
    }

    decStars=()=>{
        //form 1 of using setState
        if(this.state.stars<=0){
            this.state.stars = 0;
            return;
        }
        this.setState({
           stars : this.state.stars-0.5
        });
   }

   handleUnFav = () => {
      this.setState({
        fav : !this.state.fav
      })
   }

   handleFav = () => {
    this.setState({
      fav : !this.state.fav
    })
 }

 handleCart = () => {
    this.setState({
      cartAdded : !this.state.cartAdded
    })
 }

    render(){
        // const {movies : data} = this.props;
        // const {title, plot, price, rating, stars, fav, cartAdded} = data;  
        const {movies, addStars} = this.props;
        const {title, plot, price, rating, stars, fav, cartAdded, poster} = this.props?.movies;
        return(
            <div className="main">

                {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>
                    
                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">{rating}</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                    onClick={this.decStars} 
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                    //onClick={this.addStars.bind(this)}
                                    onClick={() => {addStars(this.props.movies)}}
                                />
                                <span className="starCount">{stars}</span>
                            </div>
                            
                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleUnFav}>un-Favourite</button> : 
                                  <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}  */}

<button className={fav?"favourite-btn":"unfavourite-btn"} onClick={this.handleUnFav}>{fav?"Favourite":"un-Favourite"}</button>
     

<button className={cartAdded?"removecart-btn":"cart-btn"} onClick={this.handleCart}>{cartAdded?"Remove from cart":"Add to Cart"} </button>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;