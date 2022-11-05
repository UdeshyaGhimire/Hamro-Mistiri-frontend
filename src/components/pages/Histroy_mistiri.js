import React from 'react';
import '../../css/Histroy_mistiri.css';
import axios from 'axios';
import DashboardComM from "./DashboardComM";




function Histroy_mistiri() {

    return (

<div className=' md:grid grid-cols-5 w-full h-full '>


<DashboardComM />


{/* Edit Form Starts Here */}
<div className='col-span-4'>

<div class="table">
<table>
  <caption>Mistiri Histroy Page</caption>
  <caption>Hired By:</caption>

  <thead>
    <tr>
      <th scope="col">Problem ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>

      <th scope="col">Description</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Problem ID">112</td>
      <td data-label="First Name">Ram</td>
      <td data-label="Last Name">Shah</td>
      <td data-label="Phone">9864241171</td>
      <td data-label="Email">shahram@gmail.com</td>
      <td data-label="Description">pipe leakage</td>


    </tr>
    
  </tbody>
</table>


</div>

</div>



</div>
    );
}
export default Histroy_mistiri;