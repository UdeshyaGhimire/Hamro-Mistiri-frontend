import React from 'react';
import '../../css/Carpenter.css';
import axios from 'axios';




function Carpenter() {

  const carpenter = "carpenter"
  const [carpenters, setCarpenters] = React.useState([]);

  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url = `http://localhost:8080/mistiris/${carpenter}`;
    axios.get(url)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);

        setCarpenters(res.data);

      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div >

      <section>
        <div class="text-carpenter"><p><b>CARPENTERS</b></p></div>
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
export default Carpenter;










