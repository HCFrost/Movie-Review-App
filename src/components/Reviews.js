import React from "react"
import Review from "./Review"

export default class Reviews extends React.Component{
    constructor(props){
        super(props)
        this.state = 
        {
        review:props.review
        }
    }
    render(){
        let review;
        if(this.state.review){
            review = this.state.review.map((review,index) => <Review key={index}{...review}/>)
        }
        return (
            <div className="card-header">
                 <Review {...review}/>
            </div>
        )
    }
}
