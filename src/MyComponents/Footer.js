import React from 'react'
import { Link } from 'react-router-dom';
import Footercss from "../css/footer.css" 
export default function Footer() {
  return (
    <>
    <div className="container-fluid footer">
			<div className="row align-items-center">
				<div className="col-md-6">
		
					<div className="text-center text-muted">©2022 <Link to="/">Short Now.</Link> All rights reserved
					</div>
				</div>
				<div className="col-md-6">
						<ul className="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
						<li className="nav-item"><Link to="/">Home</Link></li>
						<li className="nav-item"><Link to="/history">History</Link></li>
					</ul>
				</div>
			</div>
		</div>
    
    </>
  )
}
