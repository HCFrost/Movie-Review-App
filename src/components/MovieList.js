import React,{useState} from 'react'
import Movie from './Movie'
import shrek from '../Images/shrek.jpg' 
import spirit from '../Images/spiritStallionOfTheCimarron.jpg'        
import guidoCars from '../Images/guidoCars.jpg'
import princessBride from '../Images/princessBride.jpg'
function MovieList() {
        const [movies,setMovies] = useState([
            {
            name:'Shrek',
            id:1,
            image:shrek,
            desc:'GET OUT MA SWAMP',
            },{
            name:'Spirit',
            id:2,
            image:spirit,
            desc:'STALLION OF THE CIMARRON',
            },
            {name:'The Princess Bride',
            id:3,
            image:princessBride,
            desc:'loren ipsum',
           },
        
            {name:'Cars',
            id:4,
            image: guidoCars,
            desc:'loren ipsum',
            }  
        ]);
        return (
        <div  className='container text-center'>
            {movies.map((movie,id)=>{
                return <Movie  key={id}{...movie}/>})
               }
        </div>
        )}
export default MovieList
   




            
        
        
        
            
        
            
         
        
        
        
    
    







 



// export default MovieList