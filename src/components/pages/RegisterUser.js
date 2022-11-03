import React from 'react';
import Building from '../../assets/building.jpg';
import axios from 'axios';
import Suggestion from './Suggestion';
import validateEmail from './Utility';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';

function RegisterUser() {

  //form data
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [location, setLocation] = React.useState('');

  //error message
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState([]);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState([]);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState([]);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState([]);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = React.useState([]);
  const [locationErrorMessage, setLocationErrorMessage] = React.useState([]);

  const [postErrorMessage, setPostErrorMessage] = React.useState([]);

  //Buffer 
  const [creatingSignal, setCreatingSignal] = React.useState(false);

  //successMessage

  const [trueValue, setTrueValue] = React.useState([]);


  let formSubmissionPreventionFlag = false;

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setLocation("");
  }

  const handleFirstNameChange = (event) => {
    const firstNameData = event.target.value;
    setFirstNameErrorMessage("");
    setFirstName(firstNameData);
    if (firstNameData.trim() === "") {
      setFirstNameErrorMessage("First Name can't Be Empty");
    }
  };

  const handleLastNameChange = (event) => {
    const lastNameData = event.target.value;
    setLastNameErrorMessage("");
    setLastName(lastNameData);
    if (lastNameData.trim() === "") {
      setLastNameErrorMessage("Last Name cant Be Empty");
    }
  };

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


  const handlePhoneNumber = (event) => {
    const phoneNumberData = event.target.value;
    setPhoneNumberErrorMessage("");
    setPhoneNumber(phoneNumberData);
    if (phoneNumberData.trim() === "") {
      setPhoneNumberErrorMessage("Phone number cant Be Empty");
    }
  };

  const handleLocation = (event) => {
    const locationData = event.target.value;
    setLocationErrorMessage("");
    setLocation(locationData);
    if (locationData.trim() === "") {
      setLocationErrorMessage("Location cant Be Empty");
    }
  };


  //form onSubmit function

  const handleForm = (event) => {
    setCreatingSignal(true);
    event.preventDefault();

    if (firstNameErrorMessage !== '' || lastNameErrorMessage !== '') {
      formSubmissionPreventionFlag = true;
      setCreatingSignal(false);
    }

    // console.log("The name from the state is " + firstName + " hello");
    // console.log(firstName === '');

    if (firstName === '') {
      formSubmissionPreventionFlag = true;
      setFirstNameErrorMessage("First Name Cant Be Empty.");
      setCreatingSignal(false);
    } 

    if (lastName === '') {
      formSubmissionPreventionFlag = true;
      setLastNameErrorMessage("Last Name Cant Be Empty.");
    }

    if (password.length>9) {
      console.log(password.length)
      if ((/[A-Z]/.test(password)) === false) {
        formSubmissionPreventionFlag = true;
        setPasswordErrorMessage("Password must contain capital letter");
        setCreatingSignal(false);

      }
      if ((/[a-z]/.test(password)) === false) {
        formSubmissionPreventionFlag = true;
        setPasswordErrorMessage("Password must contain smaller character");
        setCreatingSignal(false);
      }
      if ((/[0-9]/.test(password)) === false) {
        formSubmissionPreventionFlag = true;
        setPasswordErrorMessage("Password must contain number");
        setCreatingSignal(false);
      }
    } else {
      formSubmissionPreventionFlag = true;
      if (password === '') {
        setPasswordErrorMessage("Password Cant be empty");

      } else {
        setPasswordErrorMessage("Password must be of 8 digits");
      }
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

    if ((/^\d{10}$/.test(phoneNumber)) === false) {
      formSubmissionPreventionFlag = true;
      if (phoneNumber === '') {
        setPhoneNumberErrorMessage("Phone Number Cant be empty");

      } else {
        setPhoneNumberErrorMessage("Please enter correct phone number");
      }
      setCreatingSignal(false);
    }
    if (location === '') {
      formSubmissionPreventionFlag = true;
      setLocationErrorMessage("Location cannot be empty.");
      setCreatingSignal(false);
    }
    if (formSubmissionPreventionFlag === false) {
      axios.post('http://localhost:8080/registerCustomer', {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "phoneNo": phoneNumber,
        "location": location
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
  };





  return (
    // background


    <div className='relative w-full h-full bg-zinc-900/80 pt-[100px]'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Building} alt="/" />
      <div className='flex justify-center items-center h-full'>
        {/* Form */}

        <form className='w-[600px] mx-auto bg-white p-9 pt-2 mb-16 mt-9' onSubmit={handleForm}>
          <h2 className='text-4xl text-[#30333a]  font-bold text-center py-4'>User Registration</h2>


          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="First Name" type="text" name='firstName' value={firstName} onChange={handleFirstNameChange} />
            <Suggestion errorMessage={firstNameErrorMessage} />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Last Name" type="text" name='lastName' value={lastName} onChange={handleLastNameChange} />
            <Suggestion errorMessage={lastNameErrorMessage} />
          </div>



          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Email" type="email" name='email' value={email} onChange={handleEmail} />
            <Suggestion errorMessage={emailErrorMessage} />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Password" type="password" name='password' value={password} onChange={handlePassword} />
            <Suggestion errorMessage={passwordErrorMessage} />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Phone Number" type="text" name='phoneNo' value={phoneNumber} onChange={handlePhoneNumber} />
            <Suggestion errorMessage={phoneNumberErrorMessage} />
          </div>


          <div className='flex flex-col mb-4 '>
            <div className='border relative bg-gray-100 p-2 text-left'>
              Location:
              <div className='text-base '>
                <select name='loaction' onChange={handleLocation} value={location}>
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
            <Suggestion errorMessage={locationErrorMessage} />
            <Suggestion errorMessage={postErrorMessage} />
            <SuccessText errorMessage={trueValue} />
          </div>


          <div className='flex justify-center items-center'>
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
              <button className='w-full py-3 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
                Register
              </button>
            }
          </div>

          {/* Link to mistiri login */}

          <p className='text-lg text-center mt-8'>Want to Register as a <a className='text-xl font-bold relative text-black hover:text-[#fcb858] underline hover:decoration-solid  capitalize hover:uppercase' href="RegisterMistiri">Mistiri</a> instead?</p>



        </form>
      </div>

    </div>
  );
}



export default RegisterUser;







