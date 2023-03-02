import React,{useState} from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
/* import people from "./data";
 */
const Review = ({people}) => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const nextReview=()=>{
        console.log(index);
        if(index===people.length-1){
        return(
            setIndex(0)
        ); 
        }
        else{
            return setIndex((index)=>{
                const value=index+1;
                return value;
            })
            ;
        }
    }
    const previousReview=()=>{
        if(index===0){
            return setIndex(()=>{
                const value=people.length-1;
                return value; 
            });
        }
        else{
            return setIndex((index)=>{
                const value=index-1;
                return value;
            });
            }
    }
    const randomReview=()=>{
        const random=Math.floor(Math.random()*people.length);
        return setIndex(random);
    }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className="person-img"/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={previousReview}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
        Random Review
      </button>
    </article>  
  )
}

export default Review;