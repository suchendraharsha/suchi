import React from 'react';
import { useState } from 'react';
const Form= ({addTour}) =>{
    const [name,setName]=useState("");
    const [info,setInfo]=useState("");
    const [image,setImage]=useState("");
    
    const [price,setPrice]=useState("");
    const [people,setPeople]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const person={id:new Date().getTime().toString(),name,image,price,info};
        setPeople([...people,person]);
        console.log(name,image,price,info);
        setName("");
        setImage("");
        setPrice("");
        setInfo("");
        addTour(person);
        return;
    }
    console.log(people);
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <h3>forms </h3>
                <label>Name:</label>
                <input type="text" value={name} name="name" onChange={(e) => { 
                    setName(e.target.value);
                    }}></input><br></br>
                <label>image:</label>
                <input type="text" value={image} name="image" onChange={(e) => { 
                    setImage(e.target.value);
                    }}></input>
                <label>info:</label>
                <input type="text" value={info} name="info" onChange={(e) => { 
                    setInfo(e.target.value);
                    }}></input>
                <label>price:</label>
                <input type="text" value={price} name="price" onChange={(e) => { 
                    setPrice(e.target.value);
                    }}></input>
                <button type="submit">submit</button>
            </form>
        </div>
        {/* <div>
            {people.map((person)=>{
                return <div key={person.id}>
                <h2>{person.name}</h2>
                <p>{person.image}</p>
                <p>{person.price}</p>
                <p>{person.info}</p>
                </div>
            })}
        </div> */}
        </>
    );
}
export default Form;