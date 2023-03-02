import React,{useState,useEffect} from 'react';
import "./App5.css";

const url="https://course-api.com/react-tabs-project";
const App5 = () => {
  
  const [jobs,setJobs]=useState([]);
  const [loading,setLoading]=useState(false);
  const [companies,setCompanies]=useState([]);


  const fetchData= async()=>{
    setLoading(true);
    const response=await fetch(url);
    const data=await response.json();
    setLoading(false);
    setJobs(data);
    /* setLoading(false); */
  }

  useEffect(()=>{
    fetchData();
  },[])


  const filterCompanies=(company)=>{
    const newItem=jobs.filter((item)=>item.company===company);
    setCompanies(newItem);
    return;
    /* if(company==="TOMMY"){
        const newItem=jobs.filter((item)=>item.company===company);
        setCompanies(newItem);
        return;

    }
    if(company==="BIGDROP"){
        const newItem=jobs.filter((item)=>item.company===company);
        setCompanies(newItem);
        return;

    }
    if(company==="CUKER"){
        const newItem=jobs.filter((item)=>item.company===company);
        setCompanies(newItem);
        return;

    }
 */

  }

  
  if(loading){
    return (
        <section className='section loading'>
        <h1>Loading...</h1>
        </section>
    )
  }
  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
            {jobs.map((job,index)=>{
                <button key={index} className={`job-btn ${index === index && 'active-btn'}`} onClick={filterCompanies(job.company)}>{job.company}</button>
            })}
        </div>
      </div>
    </section>  
  );
}

export default App5;