import React from 'react';
import '../../css/Plumber.css';
import axios from 'axios';




function Plumber() {

  const plumber = "plumber"
  const [plumbers, setPlumbers] = React.useState([]);

  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url = `http://localhost:8080/mistiris/${plumber}`;
    axios.get(url)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);

        setPlumbers(res.data);

      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div >

      <section>
        <div class="text-plumber"><p><b>PLUMBERS</b></p></div>
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
               </div>
               <div class="grid-child-posts">
                 <p>"I am a pro painter"</p>
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
export default Plumber;










