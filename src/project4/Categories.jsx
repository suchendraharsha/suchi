import React from 'react';

const Categories = ({categories,filterItems}) => {
  return (
    <section className='btn-container'>
       {
        categories.map((category,index)=>{
            return (
            <button type="button" key={index} className='filter-btn' onClick={()=>filterItems(category)}>{category}</button>
            );
        })
       }
    </section>
  );
}

export default Categories;