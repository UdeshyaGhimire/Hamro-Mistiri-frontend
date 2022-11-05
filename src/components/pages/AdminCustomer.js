import React from 'react';
import '../../css/Histroy_mistiri.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DashboardComA from './DashboardComA';
import { Link } from 'react-router-dom';





function AdminCustomer() {

  const params = useParams();
  const userId = params.id;


  const [mistiriHistory, setMistiriHistory] = React.useState([]);


  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url1 = `http://localhost:8080/findallcustomer`;
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
                <th scope="col">Customer ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Location</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {mistiriHistory.map(problem => (
                <tr>
                  <td data-label="Problem ID">{problem.id}</td>
                  <td data-label="First Name">{problem.firstName}</td>
                  <td data-label="Last Name">{problem.lastName}</td>
                  <td data-label="Phone">{problem.phoneNo}</td>
                  <td data-label="Email">{problem.email}</td>
                  <td data-label="Location">{problem.location}</td>
                  <td data-label="Location">
                    <Link to={`/deleteCustomer/${problem.id}`}>
                      <button>Delete</button>
                    </Link>
                  </td>
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