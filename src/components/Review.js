import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import ReviewForm from "./ReviewForm";
import {FaStar }from "react-icons/fa";

const Review = (props) => { 
    const { review } = props
    const {username,date,rating,content,id} = review
    
        return(
            <div  className="card mt-4">
                <div className="card-header bg-success">
                    <span className="float-end" >
                        <DeleteButton onClick={props.onClick}/>
                    </span>
                    
                    <h6 className="float-start">
                        {username}<br/>
                        {date}
                        
                    </h6>
                    
                    
                </div>
            <div className="card-footer ">

            {[...Array(5)].map((star,i) => {
                const ratingVal = i + 1;
                return(
                    <label key={ratingVal}>
                        
                        <FaStar 
                            color={i < rating ? "orange" : "lightgray"}
                            size={30}
                             />
                        
                    </label>    
                )
            })}<br/>
                {content}
                <br/> 
                
            </div>
        </div>
        )
    }
export default Review 

        
        

 