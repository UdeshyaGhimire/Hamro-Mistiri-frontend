import React from 'react';
import '../../css/Painter.css';
import axios from 'axios';




function Painter() {

  const painter = "painter"
  const [painters, setPainters] = React.useState([]);

  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url = `http://localhost:8080/mistiris/${painter}`;
    axios.get(url)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);

        setPainters(res.data);

      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div >

      <section>
        <div class="text-painter"><p><b>PAINTER</b></p></div>
        <div class="container-painter">
           {painters.map(painter => (
               <div class="card-painter" key={painter.id}>
               <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
               <div class="card__name">
                 <p >{painter.customer.firstName}</p> </div>
               <div class="grid-container">
   
                 <div class="grid-child-posts">
                 {painter.customer.loction}
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
export default Painter;










