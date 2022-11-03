import React from 'react';
import '../../../css/Carpenter.css';
import axios from 'axios';
import {Link} from 'react-router-dom';





function Carpenter() {

  const carpenter = "carpenter"
  const [carpenters, setCarpenters] = React.useState([]);
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
    const url = `http://localhost:8080/mistiris/${carpenter}/${address}`;
    axios.get(url)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);

        setCarpenters(res.data);

      })
      .catch(err => console.log(err));
  }, [address]);

  return (
    <div >

      <section>
        <div class="text-carpenter"><p><b>CARPENTERS</b></p></div>

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
          <div class="container-carpenter">
            {carpenters.map(carpenter => (
              <div class="card-carpenter" key={carpenter.id} onLoad={checker(plumber)}>
                <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <div class="card__name">
                  <p >{carpenter.customer.firstName}</p> </div>
                <div class="grid-container">

                  <div class="grid-child-posts">
                    {carpenter.customer.loction}
                  </div>

                </div>
                <div class="rating">
                {equalChecker()
                    ?
                    Array.from(Array(carpenter.rating), (e, i) => {
                      return <i class="fas fa-star" key={i}></i>
                    })
                    : <>
                      {Array.from(Array(carpenter.rating), (e, i) => {
                        return <i class="fas fa-star" key={i}></i>
                      })}
                      <i class="fa-solid fa-star-half"></i>
                    </>
                  }
                </div>
                <div class="about_me">
                  <p>{carpenter.aboutYou}</p>
                </div>
                <Link to={`/hiremeform/${carpenter.id}/${carpenter.customer.id}`}>
                <button class="btn draw-border" >Hire Me</button>
                </Link>

                <Link to={`/rateMeform/${carpenter.id}/${carpenter.customer.id}`}>
                  <button class="btn draw-border">Rate Me</button>
                </Link>


                <Link to={`/Review/${carpenter.id}`}>
                  <button class="btn draw-border">Reviews</button>
                </Link>
              </div>

            ))}

          </div>
          : <></>}
      </section>

    </div>
  );
}
export default Carpenter;










