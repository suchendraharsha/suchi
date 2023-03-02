import React,{useState} from 'react';
import Review from './Review';
import people from './data';
import "./App2.css"

const App2 = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review people={people}/>
      </section> 
    </main> 
  )
}

export default App2;