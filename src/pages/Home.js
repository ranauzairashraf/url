import React from 'react'
import Dexie from 'dexie';
import Header from '../MyComponents/Header';
import HomeCSS from "../css/Home.css";
import Footer from '../MyComponents/Footer';
import { useState } from 'react';
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
export const Home = () => {
  const [eLink,setElink]=useState("");
  const [date,setdate]=useState("");
  const db = new Dexie('myDatabase');
  db.version(1).stores({
    friends: '++id, name, age', // Primary key and indexed props
  });
 

  const onsubmit=(e)=>{
    console.log("pass ");
    e.preventDefault();
    if(eLink===""){
      toast.error('Enter Link Please');
    }
    else if(date===""){
      toast.error('Enter Expire Date Please');
    }
    else{
      let ran = Math.random().toString(36).slice(-6);
    localStorage.setItem('oLink',JSON.stringify(eLink))
    localStorage.setItem('date',JSON.stringify(date))
    localStorage.setItem('sUrl',JSON.stringify(window.location.origin + "/" + ran))
    
    
  
     
  
     console.log("pass ");
     toast.success('Data saved');
     Navigate('/history');
    }
   
 
   
  }
  return (
    <>
        <Header />
       <div className="container-fluid section-1">
        <h1 className="text-center pt-5">Paste the URL to be Shortened</h1>
        <div className="row">
        <div className="col-lg-6 mx-auto">
        <form className="mt-5" >
        <div  className='mb-2'>
        <input className="form-control " 
         value={eLink} type="text" onChange={(e)=>{setElink(e.target.value)}}
          placeholder="Enter link here" />
        </div>
        </form>
        <div className='mb-3'>
        <label className="form-check-label">Expiry Date :</label>
        <input className="form-control mt-2 " type="date" value={date}  onChange={(e)=>{setdate(e.target.value)}} />
        </div>
        <div className='text-center mt-5 pb-5'>
        <input type="submit" onClick={onsubmit} value="Shorten URL" className="btn w-50"/>
        </div>
      </div>
      </div>
      </div>
    <Footer/>
    </>
  )
};
export default Home