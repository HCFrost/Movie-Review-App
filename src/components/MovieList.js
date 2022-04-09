import React,{useState} from 'react'
import Movie from './Movie'
import shrek from '../Images/shrek.jpg' 
import spirit from '../Images/spiritStallionOfTheCimarron.jpg'        
import { propTypes } from 'react-bootstrap/esm/Image';

function MovieList() {
        const [movies,setMovies] = useState([
            {
            name:'Shrek',
            id:1,
            image:`${shrek}`,
            desc:'GET OUT MA SWAMP',
            },{
            name:'Spirit',
            id:2,
            image:`${spirit}`,
            desc:'STALLION OF THE CIMARRON',
            },  
        ]);
        return (
        <div  className='container text-center'>
            {movies.map((movie,id)=>{
                return <Movie  key={id}{...movie}/>})
               }
        </div>
        )}
export default MovieList
   




        //     {name:'The Princess Bride',
        //     image:'princessBride.jpg',
        //     desc:'loren ipsum',
        //     movies: [{
        //         desc:'it was good',
        //         rating: 4,
        //         username:'HCFrost',
        //         date: 'today'
        //         }]},
        
        //     [name:'Spirit',
        //     image: 'spiritStallionOfTheCimarron.jpg',
        //     desc:'loren ipsum',
        //     movies: [{
        //         desc:'it was good',
        //         rating: 4,
        //         username:'HCFrost',
        //         date: 'today'
        //         }]
        //     },
        // }}]};
    

    // render(){
        
        
        
        
            
        
            
         
        
        
        
    
    







 



// export default MovieList