import React from "react";
import Header from "../MyComponents/Header";
import HistoryCss from "../css/history.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../MyComponents/Footer";
function History(){
    return(
        <>
        <Header />
        <div className="container">
          <h1 className="text-center mt-5">History</h1>
        <table className="table mt-5">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Serial No</th>
      <th scope="col">Original URL</th>
      <th scope="col">Short URL</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Status</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td></td>

    </tr>
  </tbody>
</table>

</div>    
<Footer/>
        </>

    )
};
export default History