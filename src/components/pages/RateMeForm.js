import React from 'react';
import { useState } from 'react';

import RateImg from '../../assets/RateImg.jpg'
import Painter from './services/Painter';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Suggestion from './Suggestion';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};

function RateMe() {

  const params = useParams();
  const plumberId = params.id;
  const costumerId = params.cusId;
  console.log(plumberId);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)


  const [review, setReview] = React.useState('');

  const [postErrorMessage, setPostErrorMessage] = React.useState([]);



  const [currentValueErrorMessage, setCurrentValueErrorMessage] = React.useState([]);
  const [reviewErrorMessage, setReviewErrorMessage] = React.useState([]);

  //Buffer 
  const [creatingSignal, setCreatingSignal] = React.useState(false);

  //successMessage

  const [trueValue, setTrueValue] = React.useState([]);

  let formSubmissionPreventionFlag = false;


  const clearFields = () => {
    setCurrentValue(0);
    setReview("");
  }

  const handleReviewChange = (event) => {
    const reviewData = event.target.value;
    setReviewErrorMessage("");
    setReview(reviewData);
    if (reviewData.trim() === "") {
      setReviewErrorMessage("Review can't Be Empty");
    }
  };


  const handleClick = value => {
    setCurrentValue(value);
    if (currentValue < 1 && currentValue > 6) {
      setCurrentValueErrorMessage("Rating cannot be empty");
    }
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  const handleForm = (event) => {
    if (costumerId == localStorage.getItem("userId")) {
      window.location.href = "/";
      alert("You cannot hier yourself. Hier other plumber");  
    } else {

      setCreatingSignal(true);
      event.preventDefault();

      if (review === '') {
        formSubmissionPreventionFlag = true;
        setReviewErrorMessage("Review Cant Be Empty.");
        setCreatingSignal(false);
      }

      if (currentValue < 1 && currentValue > 6) {
        formSubmissionPreventionFlag = true;
        setCurrentValueErrorMessage("Rating cannot be empty");
      }


      if (formSubmissionPreventionFlag === false) {
        axios.post(`http://localhost:8080/rateMe/${plumberId}`, {
          "comment": review,
          "indivisualRating": currentValue,
          "customerDto": {
            "firstName": localStorage.getItem("name"),
            "lastName": "Baskota",
            "id": localStorage.getItem("userId")
          }
        })
          .then(response => {
            // loading =false;
            console.log(response)
            if (response.status === 200) {
              setTrueValue("You have been registered successfully");
              clearFields();
            }
            else {
              console.log(response.data);
              console.log(response.data.message);
            }
            setCreatingSignal(false);
          })
          .catch(error => {
            // loading = false;
            console.log("error cacthed");
            console.log(error.response)
            setPostErrorMessage(error.response.data.message)
            setCreatingSignal(false);
          });
      }
    }

  };



  return (
    <div>
      <Painter />



      <div className='fixed inset-0 bg-clack bg-opacity-30 bg-zinc-800/60 backdrop-blur-sm flex justify-center items-center'>

        <div className='rounded-xl border-[5px] border-[#484949] mt-[165px]  grid grid-cols-1 md:grid-cols-2 bg-white m-auto h-[550px] shadow-lg  shadow-gray-200 sm:max-w-[900px]  '>
          <div className=' flex w-full h-[540px] hidden md:block'>
            <img className='inline w-full h-full' src={RateImg} alt="/" />
          </div>

          <div className='p-4  '>
            {/* to close form */}
            <a className='flex justify-end text-2xl font-bold text-gray-400 ' href='/mistiris/Plumber'><button className='  '></button>X</a>

            {/* Form starts here */}
            <form className='pt-[55px]' onSubmit={handleForm}>

              <h2 className='text-4xl font-bold text-center pt-0 py-8 hover:text-[#f09e2a] '>Please Leave Us A Review!</h2>


              <div className='grid grid-cols-4  mb-4 border relative bg-gray-100 p-2 text-left rounded-md'>
                Rating:
                <div className='col-span-2 ' >
                  <div className='flex' value={currentValue}>
                    {stars.map((_, index) => {
                      return (
                        <FaStar key={index} size={24} onClick={() => handleClick(index + 1)} onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                          style={{
                            marginRight: 10, cursor: "pointer"
                          }}
                        />
                      )
                    })}
                    {console.log(currentValue)}
                    <Suggestion errorMessage={currentValueErrorMessage} />
                  </div>
                </div>
              </div>
              {/* <textarea class="mt-[30px] form-control block w-full px-3  py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-grey-900 focus:outline-none" id="ShortReview" rows="3" placeholder="Short Review" maxLength={100} value={review} onChange={handleReviewChange}></textarea> */}
              <div className='flex flex-col mb-4'>
                <input className='mt-[15px] border relative bg-gray-100 p-2 ' placeholder="Write a Review" name='aboutYou' type="text"  maxLength={100} value={review} onChange={handleReviewChange} />
              </div>
              <Suggestion errorMessage={reviewErrorMessage} />
              <Suggestion errorMessage={postErrorMessage} />
              <SuccessText errorMessage={trueValue} />
              <div className='flex flex-col'>
                {creatingSignal ?
                  <LoadingIcons.Oval stroke='#6ced07'
                    fill="#06bcee"
                    fillOpacity={5}
                    height="3em"
                    speed={1}
                    strokeOpacity={6}
                    strokeWidth={5}
                  />
                  :
                  <button className='w-full py-3 mt-[30px] bg-[#666668] hover:bg-[#26282e] relative text-white hover:bold'>
                    Submit
                  </button>
                }
              </div>



            </form>

          </div>

        </div>
      </div>
    </div>





  );
}
export default RateMe;


