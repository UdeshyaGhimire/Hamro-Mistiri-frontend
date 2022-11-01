import React from 'react';
import '../../../css/Plumber.css';
import axios from 'axios';




function Plumber() {

  const plumber = "plumber"
  const [plumbers, setPlumbers] = React.useState([]);
  const [address, setAddress] = React.useState([]);

  const handleAddress = (event) => {
    const addresss = event.target.value;
    setAddress(addresss);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if(localStorage.getItem("userId")===null){
        alert("Please Log In First");
        window.location.href = "/loginuser";
    }else{
    window.location.href = "/hiremeform";
    }
  };


  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url = `http://localhost:8080/mistiris/${plumber}/${address}`;
    axios.get(url)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);
        setPlumbers(res.data);

      })
      .catch(err => console.log(err));
  }, [address]);

  return (
    <div >

      <section>
        <div class="text-plumber"><p><b>PLUMBERS</b></p></div>
        
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
        
        <div class="container-plumber">
          {plumbers.map(plumber => (
            <div class="card-plumber" key={plumber.id}>
              <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
              <div class="card__name">
                <p >{plumber.customer.firstName}</p> </div>
              <div class="grid-container">

                <div class="grid-child-posts">
                  {plumber.customer.loction}
                </div>

              </div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
              </div>
              <div class="about_me">
                <p>{plumber.aboutYou}</p>
              </div>
              <button class="btn draw-border" onClick={handleClick}>Hire Me</button>
              <button class="btn draw-border" onClick={handleClick}>Rate Me</button>
              <button class="btn draw-border">Message</button>
            </div>
          ))}


        </div>

      </section>

    </div>
  );
}
export default Plumber;










