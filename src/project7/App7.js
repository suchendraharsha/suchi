import React,{useState} from 'react';
import "./App7.css";
import List from './List';
import Alert from './Alert';

const App7 = () => {

  const [edit,setEdit]=useState(false);
  const [name,setName]=useState("");
  const [alert,showAlert]=useState(false);
  const [list,setList]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
    
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {edit?"edit":"submit"}
          </button>
        </div>
      </form>
    </section>
       
  )
}

export default App7;