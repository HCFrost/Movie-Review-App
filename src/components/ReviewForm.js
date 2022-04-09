
import React, { useEffect, useState } from "react";
import { Form  } from "react-bootstrap";
import { Button,InputGroup } from "react-bootstrap";
import { FaStar } from 'react-icons/fa';
const ReviewForm = (props) => {
    
    const[review,setReview]= useState({
        username:'',
        date:null,
        content:''
    });
    const [rating, setRating] = useState(0);
    const[id,setId] = useState(0);
    const handleChange = ( e ) => {
        e.preventDefault();
        setReview({
            ...review,
            [e.target.name]:e.target.value
        });
    } 
    const handleSubmit = e => {
        e.preventDefault();
        props.addReview(
            {review:{...review,id,rating}}
        );
        setId((id)=>id +1)
        setRating(0)
        setReview({
            review
        })
    } 
    return(
        <div className="card p-4">
            <Form >
                <input 
                    className="form-control"
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={props.username}
                    onChange={e => handleChange(e)}
                /> <br/>                   
                <input 
                    className="form-control"
                    name='date'
                    type='date'
                    placeholder="Date"
                    value={props.date}
                    onChange={e => handleChange(e)}
                /><br/>
                <div>
            {[...Array(5)].map((star,i) => {
                const ratingVal = i + 1;
                return(
                    <label key={ratingVal}>
                        <input 
                            key={star}
                            type='radio'
                            onClick={()=>setRating(ratingVal)}
                            rating={props.rating}
                        />
                        <FaStar 
                            color={i < rating ? "orange" : "lightgray"}
                            size={30}
                             />
                        
                    </label>    
                )
            })}
        </div><br/>
                <input
                    className="form-control" 
                    name='content'
                    placeholder="Review"
                    value={props.content}
                    onChange={e => handleChange(e)}
                />
                <br/>
                <Button
                    className="bg-dark"
                    onClick={e => handleSubmit(e)}>
                    Submit 
                </Button>
            </Form>
        </div>
    );
    } 
export default ReviewForm