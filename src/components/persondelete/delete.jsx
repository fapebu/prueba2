import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { deletePerson } from '../../services/servicedelete';


export default function Delete({itemId}) {
    const [ state, setState ] = useState("")
    
    const handleDelete = async () =>{
      const dato = await deletePerson(itemId);
        setState(dato);
    }
    
   
 return (
        <>
        <Button onClick={handleDelete}>Borrar</Button>
        <div>{state}</div>
        </>
        )
}