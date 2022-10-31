import React from 'react';
import '../../../css/Carpenter.css';
import axios from 'axios';




function Carpenter() {

  const carpenter = "carpenter"
  const [carpenters, setCarpenters] = React.useState([]);
  const [address, setAddress] = React.useState([]);

  const handleAddress = (event) => {
    const addresss = event.target.value;
    setAddress(addresss);
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
        
        <div class="container-carpenter">
           {carpenters.map(Carpenter => (
               <div class="card-carpenter" key={carpenter.id}>
               <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
               <div class="card__name">
                 <p >{Carpenter.customer.firstName}</p> </div>
               <div class="grid-container">
   
                 <div class="grid-child-posts">
                 {Carpenter.customer.loction}
                 </div>
   
               </div>
               <div class="rating">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
               </div>
               <div class="about_me">
                <p>{Carpenter.aboutYou}</p>
              </div>
               <a className='' href="HireMeForm"><button class="btn draw-border">Hire Me</button></a>
               <button class="btn draw-border">Rate Me</button>
               <button class="btn draw-border">Message</button>
             </div>
           ))}
          

        </div>

      </section>

    </div>
  );
}
export default Carpenter;










