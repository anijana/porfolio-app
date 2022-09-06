import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function Projects() {
    const[toggle,setToggle]=useState(false);
    const project=["Ecommerce-website","FlipKart-Ecommerce-web","Google-Keep","Weather-app","Food-recipe","tic-tac-teo","movie-app"];
  return (
    <>
        <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th style={{color:'red'}}>**</th>
                    <th style={{color:'blueviolet'}}>Project Name</th>
                    <th style={{color:'blueviolet'}}>Language/Library/{<button onClick={()=>{setToggle(language=>!language)}}style={{color:'blueviolet', borderRadius:'5px', border:'2px solid blue'}}>React projects</button>}</th>
                  </tr>
                </thead>
                <tbody>
                    {
                    project.map((curElem,id)=>{
                        return(
                    <tr>
                        <td style={{color:'blue'}}>{id+1}</td>
                       <td>{curElem}</td>
                        <td>{toggle?"ReactJs":"JavaScript"}</td>
                    </tr> 
                        )
                    })
                   }
                </tbody>
              </Table>
    
    </>
  );
}

export default Projects;