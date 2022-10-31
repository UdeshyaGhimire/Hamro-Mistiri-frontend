import React from 'react';
import LogInImg from '../../assets/login.jpg';
import axios from 'axios';
import Suggestion from './Suggestion';
import validateEmail from './Utility';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';


function LogInUser() {
  //form data
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //error message
  const [emailErrorMessage, setEmailErrorMessage] = React.useState([]);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState([]);


  const [postErrorMessage, setPostErrorMessage] = React.useState([]);

  //buffer
  const [creatingSignal, setCreatingSignal] = React.useState(false);

  //successMessage
  const [trueValue, setTrueValue] = React.useState([]);

  let formSubmissionPreventionFlag = false;

  const clearFields = () => {
    setEmail("");
    setPassword("");
  }

  const handleEmail = (event) => {
    const emailData = event.target.value;
    setEmailErrorMessage("");
    setEmail(emailData);
    if (emailData.trim() === "") {
      setEmailErrorMessage("Email cant Be Empty");
    }
  };


  const handlePassword = (event) => {
    const passwordData = event.target.value;
    setPasswordErrorMessage("");
    setPassword(passwordData);
    if (passwordData.trim() === "") {
      setPasswordErrorMessage("Password cant Be Empty");
    }
  };

  const handleForm = (event) => {
    setCreatingSignal(true);
    event.preventDefault();

    if (password === '') {
      formSubmissionPreventionFlag = true;
      setPasswordErrorMessage("Password cannot be empty.");
      setCreatingSignal(false);
    }

    if (validateEmail(email) === false) {
      formSubmissionPreventionFlag = true;
      if (email === '') {
        setEmailErrorMessage("Email Cant be Empty");

      } else {
        setEmailErrorMessage("Please enter correct email");
      }
      setCreatingSignal(false);
    }

    if (formSubmissionPreventionFlag === false) {
      axios.post('http://localhost:8080/loginCustomer', {
        "email": email,
        "password": password
      })
        .then(response => {
          // loading =false;
          console.log(response)
          console.log(response.data.data.isVerified)

          if (response.status === 200) {
            if (response.data.data.isVerified === false) {
              alert("Please verify you email before you login for the first time");
            } else {
              setTrueValue("Successfully loggedIn");
              console.log(response.data.data.id);
              localStorage.setItem("userId", response.data.data.id);
              localStorage.setItem("name", response.data.data.firstName);
              localStorage.setItem("role", response.data.data.role);
              window.location.href = "/";
              clearFields();
            }
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
  };



  return (
    // background
    <div className='relative w-full h-screen bg-zinc-900/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={LogInImg} alt="/" />
      <div className='flex justify-center items-center h-full'>
        {/* Form */}

        <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleForm} action='/'>
          <h2 className='text-4xl font-bold text-center py-4 text-[#30333a]'>User Log In</h2>
          <div>
            <p></p>

          </div>
          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Email" type="text" name='email' value={email} onChange={handleEmail} />
            <Suggestion errorMessage={emailErrorMessage} />
          </div>

          <div className='flex flex-col'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Password" type="text" name='password' value={password} onChange={handlePassword} />
            <Suggestion errorMessage={passwordErrorMessage} />
            <Suggestion errorMessage={postErrorMessage} />
            <SuccessText errorMessage={trueValue} />
          </div>

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

            <div className='flex flex-col'>
              <button className='w-full py-3 mt-8 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
                Sign In
              </button>
            </div>
          }
          {/* Link to mistiri login */}
          <div className=' text-center mt-8'>
            <p className='text-lg text-center mt-8'>Want to Log In as a <a className='text-xl font-bold relative text-black hover:text-[#fcb858] underline hover:decoration-solid  capitalize hover:uppercase' href="LogInMistiri">Mistiri</a> instead?</p>

          </div>
        </form>

      </div>

    </div>
  );
}

export default LogInUser;
