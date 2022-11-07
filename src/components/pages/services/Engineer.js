import React from 'react';
import '../../../css/Engineer.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import img from '../../../images/a.jpg'






function Engineer() {

  const engineer = "engineer"
  const [engineers, setEngineers] = React.useState([]);
  const [address, setAddress] = React.useState([]);

  var decimal = 0.0;
  var removeDecimal = 0;

  const handleAddress = (event) => {
    const addresss = event.target.value;
    setAddress(addresss);
  };

  function equalChecker() {
    if (decimal === removeDecimal) {
      return true;
    } else return false;
  };

  function checker(plumber) {
    console.log(plumber.rating);
    decimal = plumber.rating;
    removeDecimal = Math.trunc(decimal);
  }


  function loggedInChecker() {
    if (localStorage.getItem("userId") === null) {
      alert("Please Log In First");
      window.location.href = "/loginuser";
      return false;
    } else {
      return true;
    }
  };


  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url = `http://localhost:8080/mistiris/${engineer}/${address}`;
    axios.get(url)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);

        setEngineers(res.data);
      })
      .catch(err => console.log(err));
  }, [address]);

  return (
    <div >

      <section>
        <div class="main_engineer">
        <div class="text-engineer"><p><b>ENGINEERS</b></p></div>

        <div className='flex flex-row-reverse bg-[#5a6170] pr-4 '>
          <div className='grid grid-cols-2 border relative bg-gray-100 p-2 text-left '>
            <div className=''>
              Your Location:
            </div>
            <div className='text-base '>
              <select name='yourlocation' onChange={handleAddress} value={address} >
                <option value="">&nbsp;&nbsp;&nbsp;------</option>
                <option value="kathmandu">Kathmandu</option>
                <option value="lalitpur">Lalitpur</option>
                <option value="bhaktapur">Bhaktapur</option>
                <option value="biratnagar">Biratnagar</option>
                <option value="birgunj">Birgunj</option>
                <option value="dharan">Dharan</option>
              </select>
            </div>
          </div>
        </div>

        
        
          


        {loggedInChecker() ?
          <div class="container-engineer">
            {engineers.map(engineer => (
              <div class="card-engineer" key={engineer.id} onLoad={checker(engineer)}>
 <img class="round" src={img}   alt="user" />                <div class="card__name">
                  <p >{engineer.customer.firstName}{" "}{engineer.customer.lastName}</p> </div>
                <div class="grid-container">

                  <div class="grid-child-posts">
                    {engineer.customer.loction}
                  </div>

                </div>
                <div class="rating">
                  {equalChecker()
                    ?
                    Array.from(Array(engineer.rating), (e, i) => {
                      return <i class="fas fa-star" key={i}></i>
                    })
                    : <>
                      {Array.from(Array(removeDecimal), (e, i) => {
                        return <i class="fas fa-star" key={i}></i>
                      })}
                      <i class="fa-solid fa-star-half"></i>
                    </>
                  }
                </div>
                <div class="self_me">
                  <p>{engineer.employeeStatus}</p>
                </div>
                <div class="about_me">
                  <p>{engineer.aboutYou}</p>
                </div>

                {localStorage.getItem("role") === "admin" ?
                    <>
                        <Link to={`/deleteMistiri/${engineer.id}`}>
                         <button class="btn draw-border" >Delete</button>
                        </Link>
                    </> :
                    <>
                      <Link to={`/hiremeform/${localStorage.getItem("userId")}/${engineer.id}/${engineer.customer.id}`}>
                        <button class="btn draw-border" >Hire Me</button>
                      </Link>

                      <Link to={`/Review/${engineer.id}`}>
                        <button class="btn draw-border">Reviews</button>
                      </Link>

                    </>}

              </div>
            ))}


          </div>
          : <></>}
           </div>

      </section>

    </div>
  );
}
export default Engineer;










