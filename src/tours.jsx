import React,{useState} from 'react';
import Tour from './tour';

const Tours = ({tours,removeTour,searchItem}) => {


  const [search,setSearch]=useState("");

  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        <input type="text" value={search} name="search" onChange={(e)=>setSearch(e.target.value)}></input>
        <button onClick={()=>{
          searchItem(search);
          setSearch("");
          }}>search</button>
      </div>
      <div className='tours' >
        {tours.map((tour)=>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours