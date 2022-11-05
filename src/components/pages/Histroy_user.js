import React from 'react';
import '../../css/Histroy_user.css';
import axios from 'axios';
import DashboardComU from "./DashboardComU";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Histroy_user() {

  const params = useParams();
  const userId = params.id;


  const [userHistory, setUserHistory] = React.useState([]);


  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url1 = `http://localhost:8080/customerHistory/${userId}`;
    axios.get(url1)
      .then((res) => {
        // console.log(res.data);
        console.log(res.data);
        setUserHistory(res.data);

      })
      .catch(err => console.log(err));
  }, []);



  return (

    <div className=' md:grid grid-cols-5 w-full h-full '>


      <DashboardComU />


      {/* Edit Form Starts Here */}
      <div className='col-span-4'>

        <div class="table">
          <table>
            <caption>User Histroy Page</caption>
            <caption>You Hired:</caption>

            <thead>
              <tr>
                <th scope="col">Problem ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Rate</th>


              </tr>
            </thead>
            <tbody>
              {userHistory.map(problem => (
                <tr>
                  <td data-label="Problem ID">{problem.id}</td>
                  <td data-label="First Name">{problem.mistiriDetail?.customer?.firstName}</td>
                  <td data-label="Last Name">{problem.mistiriDetail?.customer?.lastName}</td>
                  <td data-label="Phone">{problem.mistiriDetail?.customer?.phoneNo}</td>
                  <td data-label="Email">{problem.mistiriDetail?.customer?.email}</td>
                  <td data-label="Description">{problem.mistiriDetail?.service}</td>
                  <td data-label="Description">{problem.description}</td>
                  <td data-label="Description">
                    <Link to={`/rateMeform/${problem.mistiriDetail?.id}/${problem.mistiriDetail?.customer?.id}`}>
                      Rate Me
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
export default Histroy_user;