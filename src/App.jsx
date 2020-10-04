import React from 'react';

import Card from './Card.jsx';
import fData from './fileData.jsx';

function App(){
    
return( 
    <>
    <p className="heading">Thats just a simple list of Objects</p>

    <div className="container-fluid d-flex justify-content-center p-2">
        <div className="row">
        {fData.map((val,index)=>{
                    return(
                        <Card
                        key={val.id}
                        img={val.img}
                        title={val.title}  
                        link={val.link}>
                        </Card>
                    );
                })};

        </div>
       </div>
    </>
);

}


export default App;