import React from 'react';
import '../../css/Engineer.css';
import axios from 'axios';




function Engineer() {

  const engineer = "engineer"
  const [engineers, setEngineers] = React.useState([]);

  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url = `http://localhost:8080/mistiris/${engineer}`;
    axios.get(url)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);

        setEngineers(res.data);

      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div >

      <section>
        <div class="text-engineer"><p><b>ENGINEERS</b></p></div>
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
export default Engineer;










