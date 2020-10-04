
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Card(props){
    return( 
        <>
        <div className="card">
            <img src={props.img} alt="Avatar"/>
            <div className="container">
                <h4>{props.title}</h4> 
                <p><a href={props.link} target="_blank">Lets Google the details</a></p> 
            </div>
       </div>
        </>
    );
    }
    
    
    export default Card;