import React from 'react';
import '../../css/Review.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';







function Review() {
    const params = useParams();
    const mistiriId = params.id;


    const [decimal, setDecimal] = React.useState(0.0);
    const [removeDecimal, setRemoveDecimal] = React.useState(0);

    const [mistiri, setmistiri] = React.useState([]);

    const [reviews, setReviews] = React.useState([]);

    const equalChecker = () => {
        if (decimal == removeDecimal) {
            return true;
        } else return false;
    };

    React.useEffect(() => {
        console.log("hello inside useeEffect");
        const url = `http://localhost:8080/findReviews/${mistiriId}`;
        const url1 = `http://localhost:8080/mistiriDashboard/${mistiriId}`;
        axios.get(url)
            .then((res) => {
                // console.log(res.data);
                //console.log(res.data);
                setReviews(res.data);

            })
            .catch(err => console.log(err));

        axios.get(url1)
            .then((res) => {
                // console.log(res.data);
                console.log(res.data);
                setmistiri(res.data);
                setDecimal(res.data.rating);
                setRemoveDecimal(Math.trunc(decimal));
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div >
            
            <section> 
            <div class="main_review">
                <div class="testimonials">
              

                <div class="testimonial-heading">

                    <h1>Clients Review</h1>
                </div>

                <div class="small_card" key={mistiri.id}>
                    <div class="card-review">
                        <img class="round_review" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                        <div class="card__rname_outer">
                            <div class="card__rname">
                                <p >{mistiri.customer?.firstName} {mistiri.customer?.lastName}</p>
                            </div>
                            <div class="grid-rcontainer">
                                <p> kathmandu</p>
                            </div>
                            <div class="rating">
                                {equalChecker
                                 ? 
                                Array.from(Array(mistiri.rating), (e, i) => {
                                    return <i class="fas fa-star" key={i}></i>
                                })
                                    :<>
                                    {Array.from(Array(removeDecimal), (e, i) => {
                                        return <i class="fas fa-star" key={i}></i>
                                    })}
                                    <i class="fa-solid fa-star-half"></i>
                                    </>
                                  }
                            </div>
                        </div>
                    </div>
                </div>


                <div class="testimonial-box-container">
                    {reviews.map(review => (
                        <div class="testimonial-box" key={review.id}>

                            <div class="box-top">
                                <div class="profile">
                                    <div class="profile-img">
                                        <img src="images/c-1.jpg" />
                                    </div>
                                    <div class="name-user">
                                        <strong>{review.customer.firstName} {review.customer.lastName}
                                        </strong>
                                        <span>@{review.customer.firstName}</span>
                                    </div>
                                </div>
                                <div class="reviews">
                                    {Array.from(Array(review.indivisualRating), (e, i) => {
                                        return <i class="fas fa-star" key={i}></i>
                                    })}
                                </div>
                            </div>
                            <div class="client-comment">
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                </div>
            </section>
            
        </div>
    );
}
export default Review;

