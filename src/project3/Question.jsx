import React,{useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({question}) => {
  const [addInfo,setAddInfo]  = useState(false);
  const {title,info}  = question;
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={(info)=>
                setAddInfo(!addInfo)
            }>{addInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </header>
        <p>{addInfo && info}</p>
    </article>
  )
}

export default Question;