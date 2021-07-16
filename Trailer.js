import React from 'react'
import { Link } from 'react-router-dom'
import   '../App.css';

function Trailer(props) {
   
 const {Title,date, description,posterURL,video}=props.location.movie
    return (
        <div>
         <nav>
            <Link to="/"><button>Retour au Home Page</button></Link>
         </nav>
         <br/>
         <div className="trailer">
            <h1>{Title}</h1>
            <h5>{date}</h5>  
            <p>Description:{description}</p>
            <img src={posterURL} alt="name" style={{width:"250px"}}/>
            <video> href={video}</video>
        </div>
        </div>
    )
}

export default Trailer
