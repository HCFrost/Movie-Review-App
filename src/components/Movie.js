import React, { useState } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const Movie = (props) => {
  const [name] = useState(props.name) 
  const [image] = useState(props.image)
	const [desc] = useState(props.desc)
  const [reviews, setReviews]= useState([])
	const addReview = (review) => {
		setReviews([...reviews,review]);
	} 
  const HandleDeleteItem = (e) => {
    console.log(props)
  }
	const DisplayReviews = reviews.map( 
		(review,id) => {
			return <Review key={id}{...review} onClick={e => HandleDeleteItem(e)}/>
		})
  
  return(
    <div className='card text-center'>
      <div className="card-header text-center">
        <h4>
          {name}
        </h4>
        <h6>
          {desc} 
        </h6>
      	<img src={image} className='w-75' alt="" />
      </div> 
      <div className="card-footer container">
        <ReviewForm addReview={addReview}/>
				{DisplayReviews}
        {console.log({reviews})}
      </div>
    </div>)
    
      }   
export default Movie