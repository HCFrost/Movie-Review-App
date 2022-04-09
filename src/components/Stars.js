import React, {useState} from "react";

import { FaStar } from 'react-icons/fa';

const Stars = (props) => {
    
    const [rating, setRating] = useState(0);
    
    return(
        <div>{console.log(props)}
            {[...Array(5)].map((star,i) => {
                const ratingVal = i + 1;
                return(
                    <label key={ratingVal}>
                        <input 
                            type='radio'
                            onChange={()=>setRating(ratingVal)}
                            rating={props.rating}
                        />
                        <FaStar 
                            color={i < props.rating ? "orange" : "lightgray"}
                            size={30}
                             />
                        
                    </label>    
                )
            })}
        </div>
    );
}

export default Stars;