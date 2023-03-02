import React,{useEffect, useState}from 'react';
import data from './data';
import './App6.css';

const App6 = () => {
    const [text,setText]=useState([]);
    const [count,setCount] = useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
       /*  let amount = parseInt(count);
        if(count<=0){
            amount=1;
        }
        if(count>9){
            amount=9;
        }
        setText(data.slice(0,amount)); */
    };
    //ss
    useEffect(() => {
      let amount = parseInt(count);
        if(count<0){
            amount=1;
        }
        if(count>9){
            amount=9;
        }
        /* setText(data.slice(0,amount)); */
        let slider = setInterval(() => {
          setText(data.slice(0,amount));
        }, 2000);
        return () => {
          clearInterval(slider);
        };
    }, [count]);
   
  
    //ss

    return (
        <section className='section-center'>
          <h3>tired of boring lorem ipsum?</h3>
          <form className='lorem-form' onSubmit={handleSubmit}>
            <label htmlFor='amount'>paragraphs:</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button className='btn'>generate</button>
          </form>
          <article className='lorem-text'>
            {text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </article>
        </section>
    );
}

export default App6;