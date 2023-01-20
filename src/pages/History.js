import React from "react";
import Header from "../MyComponents/Header";
function History(){
    return(
        <>
        <Header />
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Serial No</th>
      <th scope="col">Original URL</th>
      <th scope="col">Short URL</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Status</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

        
        </>

    )
};
export default History