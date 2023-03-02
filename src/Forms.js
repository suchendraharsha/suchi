import React from 'react';
import { useState } from 'react';
const Form= () =>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [people,setPeople]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const person={id:new Date().getTime().toString(),name,email};
        setPeople([...people,person]);
        console.log(name);
        setName("");
        setEmail("");
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
                <label>Email:</label>
                <input type="text" value={email} name="email" onChange={(e) => { 
                    setEmail(e.target.value);
                    }}></input>
                <button type="submit">submit</button>
            </form>
        </div>
        <div>
            {people.map((person)=>{
                return <div key={person.id}>
                <h2>{person.name}</h2>
                <p>{person.id}</p>
                <p>{person.email}</p>
                </div>
            })}
        </div>
        </>
    );
}
export default Form;