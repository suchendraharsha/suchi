import React,{useState} from 'react';
import "./App4.css";
import data from "./data";
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ["all", ...new Set(data.map((item) => item.category))];



const App4 = () => {
  const [items,setItems]=useState(data);

  const [categories,setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    if(category==="all"){
        setItems(data);
        return;
    }
    else{
        const newItem=data.filter((item)=>item.category===category);
        setItems(newItem);
        return;
    }
  }
  return (
    <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={items} />
    </section>
  </main>  
  );
}

export default App4;