import React from 'react'
import Header from '../MyComponents/Header';
import HomeCSS from "../css/Home.css";
import Footer from '../MyComponents/Footer';
export const Home = () => {
  return (
    <>
        <Header />
       <div className="container-fluid section-1">
        <h1 className="text-center pt-5">Paste the URL to be Shortened</h1>
        <div className="row">
        <div className="col-lg-6 mx-auto">
        <form className="mt-5">
        <div  className='mb-2'>
        <input className="form-control " type="text" placeholder="Enter link here" />
        </div>
        </form>
        <div className='mb-3'>
        <label className="form-check-label">Expiry Date :</label>
        <input className="form-control mt-2 " type="date"  />
        </div>
        <div className='text-center mt-5 pb-5'>
        <input type="submit" value="Shorten URL" className="btn w-50"/>
        </div>
      </div>
      </div>
      </div>
    <Footer/>
    </>
  )
};
export default Home