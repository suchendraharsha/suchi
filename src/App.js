import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Tours from './tours';
import Loading from './loading';
/* import Form from './Forms'; */
import Forms2 from "./Forms2";

function App() {
  const [loading,setLoading]=useState(false);
  const [tours,setTours]=useState([]);
  const url="https://course-api.com/react-tours-project";

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=> id!==tour.id);
    return setTours(newTours);
  
  }

  const addTour=(person)=>{
    return setTours([...tours, person]);
  }
  console.log(tours);
  const searchItem=(search)=>{
    if(search){
      const newItem=tours.filter((tour)=>tour.name.toLowerCase()===search.toLowerCase());
      if(newItem.length!==0){
        console.log(newItem);
         return setTours(newItem);
      }
    }
  }
  /* 2 addTour={addTour} * */
  //suchi
     /* const Form= () =>{
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
        setInfo(""); */
        /* return addTour(person);  */
        /* setTours([...tours,person]);
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
        <div>
            {people.map((person)=>{
                return <div key={person.id}>
                <h2>{person.name}</h2>
                <p>{person.image}</p>
                <p>{person.price}</p>
                <p>{person.info}</p>
                </div>
            })}
        </div>
        </>
    );
}   */
  

  const fetchData=async()=>{
    setLoading(true);
    const response=await fetch(url);
    const tours=await response.json();
    setLoading(false);
    setTours(tours);
  }
  useEffect(()=>{
    fetchData();
  },[])
  if (loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Forms2 addTour={addTour}/>
      {/* <Form /> */}
      <Tours tours={tours} removeTour={removeTour} searchItem={searchItem}/>
    </main>
  );
}

export default App;
