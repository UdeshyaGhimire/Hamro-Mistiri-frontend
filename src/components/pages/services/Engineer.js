import React from 'react';
import '../../../css/Engineer.css';
import axios from 'axios';




function Engineer() {

  const engineer = "engineer"
  const [engineers, setEngineers] = React.useState([]);
  const [address, setAddress] = React.useState([]);

  const handleAddress = (event) => {
    const addresss = event.target.value;
    setAddress(addresss);
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
        
        <div class="container-engineer">
           {engineers.map(engineer => (
               <div class="card-engineer" key={engineer.id}>
               <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
               <div class="card__name">
                 <p >{engineer.customer.firstName}</p> </div>
               <div class="grid-container">
   
                 <div class="grid-child-posts">
                 {engineer.customer.loction}
                 </div>
   
               </div>
               <div class="rating">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
               </div>
               <div class="about_me">
                 <p>{engineer.aboutYou}</p>
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
export default Engineer;










