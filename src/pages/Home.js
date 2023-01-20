import React from 'react'

export const Home = () => {
  return (
    <>
       <div className="container ">
        <h1 className="text-center">Paste the URL to be shortened</h1>
        <div className="row">
        <div className="col-lg-6 mx-auto">
        <form className="d-flex mt-5">
        <input className="form-control me-2" type="text" placeholder="Enter link here" />
        <input type="submit" value="Shorten URL" className="btn btn-primary w-button"/><br/>
        <input className="form-control me-2" type="date" placeholder="Enter link here" />
      </form>
      </div>
      </div>
      </div>
    
    </>
  )
}
