import React from 'react';
import '../../css/Histroy_mistiri.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DashboardComA from './DashboardComA';





function AdminCustomer() {

  const params = useParams();
  const userId = params.id;


  const [mistiriHistory, setMistiriHistory] = React.useState([]);


  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url1 = `http://localhost:8080/mistiriHistory/${userId}`;
    axios.get(url1)
      .then((res) => {
        // console.log(res.data);
        console.log(res.data);
        setMistiriHistory(res.data);

      })
      .catch(err => console.log(err));
  }, []);

  const handelClick = (event) => {
    alert("rate me called");
  };


  return (

    <div className=' md:grid grid-cols-5 w-full h-full '>


      <DashboardComA />


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
            {mistiriHistory.map(problem => (
              <tr>
                <td data-label="Problem ID">{problem.id}</td>
                <td data-label="First Name">{problem.customer?.firstName}</td>
                <td data-label="Last Name">{problem.customer?.lastName}</td>
                <td data-label="Phone">{problem.customer?.phoneNo}</td>
                <td data-label="Email">{problem.customer?.email}</td>
                <td data-label="Description">{problem.description}</td>
              </tr>
              ))}
            </tbody>
          </table>


        </div>

      </div>



    </div>
  );
}
export default AdminCustomer;