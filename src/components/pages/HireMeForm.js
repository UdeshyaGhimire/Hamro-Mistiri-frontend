import React from 'react';
import HireImg from '../../assets/hire.jpg'
import Painter from './services/Painter';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Suggestion from './Suggestion';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';


function HireMeForm() {

  const params = useParams();
  const mistiriId = params.id;
  const mistriCusID = params.cid;
  const costumerId = params.cudId;
  console.log(costumerId);


  //form data
  const [urgency, setUrgency] = React.useState('');
  const [problem, setProblem] = React.useState('');

//error
  const [postErrorMessage, setPostErrorMessage] = React.useState([]);

//from data error
  const [urgencyErrorMessage, setUrgencyErrorMessage] = React.useState([]);
  const [problemErrorMessage, setProblemErrorMessage] = React.useState([]);

  //Buffer 
  const [creatingSignal, setCreatingSignal] = React.useState(false);

  //successMessage
  const [trueValue, setTrueValue] = React.useState([]);


  let formSubmissionPreventionFlag = false;


  const clearFields = () => {
    setUrgency("");
    setProblem("");
  }

  const handleUrgencyChange = (event) => {
    const reviewData = event.target.value;
    setUrgencyErrorMessage("");
    setUrgency(reviewData);
    if (reviewData.trim() === "") {
      setUrgencyErrorMessage("Urgency can't Be Empty");
    }
  };

  const handleProblemChange = (event) => {
    const reviewData = event.target.value;
    setProblemErrorMessage("");
    setProblem(reviewData);
    if (reviewData.trim() === "") {
      setProblemErrorMessage("Problem can't Be Empty");
    }
  };

  const handleForm = (event) => {
    if (mistriCusID === localStorage.getItem("userId")) {
      window.location.href = "/";
      alert("You cannot hier yourself. Hier other plumber");  
    } else {

      setCreatingSignal(true);
      event.preventDefault();

      if (urgency === '') {
        formSubmissionPreventionFlag = true;
        setUrgencyErrorMessage("Urgency Cant Be Empty.");
        setCreatingSignal(false);
      }

      if (problem === '') {
        formSubmissionPreventionFlag = true;
        setProblemErrorMessage("Problem Cant Be Empty.");
        setCreatingSignal(false);
      }

      if (formSubmissionPreventionFlag === false) {
        axios.post(`http://localhost:8080/${costumerId}/addProblem/${mistiriId}`, {
          "urgency": urgency,
          "description": problem
      })
          .then(response => {
            // loading =false;
            console.log(response)
            if (response.status === 200) {
              setTrueValue("You have hired a mistiri");
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
            <img className='inline w-full h-full' src={HireImg} alt="/" />
          </div>
          <div className='p-4  '>
            {/* to close form */}
            <a className='flex justify-end text-2xl font-bold text-gray-400 ' href='/'><button className=''></button>X</a>

            {/* Form starts here */}
            <form className='pt-[65px]' onSubmit={handleForm}>

              <h2 className='text-4xl font-bold text-center pt-0 py-8 hover:text-[#f09e2a]'>Hire Us!</h2>

              <div className=' '>
                <div className='grid grid-cols-4  mb-4 border relative bg-gray-100 p-2 text-left rounded-md'>
                  Urgency:
                  <div className='col-span-2 text-base '>
                    <select name='service' onChange={handleUrgencyChange} value={urgency}>
                    <option value="">&nbsp;&nbsp;&nbsp;------</option>
                      <option value="urgent">Urgent</option>
                      <option value="1day">In 1 day</option>
                      <option value="2days">In 2 days</option>
                      <option value="3days">In 3 days</option>
                      <option value="1weeks">Within 1 week</option>
                      <option value="2weeks">Within 2 weeks</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
                <Suggestion errorMessage={urgencyErrorMessage} />
              </div>
              <div className='flex flex-col mb-4'>
                <input className='mt-[15px] border relative bg-gray-100 p-2 ' placeholder="List you're problem" name='aboutYou' type="text"  maxLength={100} value={problem} onChange={handleProblemChange} />
              </div>
              <Suggestion errorMessage={problemErrorMessage} />
              <Suggestion errorMessage={postErrorMessage} />
              <SuccessText errorMessage={trueValue} />
              <div className='flex flex-col justify-center items-center'>
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
export default HireMeForm;


