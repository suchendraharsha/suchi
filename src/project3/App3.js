import React from 'react';
import questions from './data';
import Question from './Question';
import "./App3.css";

const App3 = () => {
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
            {questions.map((question)=>{
                return( 
                <Question key={question.id} question={question} />
                );
            })}
        </section>
      </div>
    </main>        
  );
}

export default App3
