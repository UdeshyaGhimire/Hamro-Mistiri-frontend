import React from 'react';
import '../../css/Technician.css';
import axios from 'axios';




function Technician() {

  const technician = "technician"
  const [technicans, setTechnician] = React.useState([]);

  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url = `http://localhost:8080/mistiris/${technician}`;
    axios.get(url)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);

        setTechnician(res.data);

      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div >

      <section>
        <div class="text-technician"><p><b>TECHNICIAN</b></p></div>
        <div class="container-technician">
           {technicans.map(technician => (
               <div class="card-technician" key={technician.id}>
               <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
               <div class="card__name">
                 <p >{technician.customer.firstName}</p> </div>
               <div class="grid-container">
   
                 <div class="grid-child-posts">
                 {technician.customer.loction}
                 </div>
   
               </div>
               <div class="rating">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
               </div>
               <div class="grid-child-posts">
                 <p>"I am a pro painter"</p>
                 </div>
               <a className='' href="HireMeForm"><button class="btn draw-border">Hire Me</button></a>
               <button class="btn draw-border">About Me</button>
               <button class="btn draw-border">Message</button>
             </div>
           ))}
          

        </div>

      </section>

    </div>
  );
}
export default Technician;










