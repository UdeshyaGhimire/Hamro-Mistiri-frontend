import React from 'react';
import Building from '../../assets/building.jpg'
import axios from 'axios';
import Suggestion from './Suggestion';
import validateEmail from './Utility';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';

function RegisterMistiri() {

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [panNumber, setPanNumber] = React.useState('');
  const [service, setService] = React.useState('');
  const [emplyoeeStatus, setEmployeeStatus] = React.useState('');
  const [aboutYou, setAboutYou] = React.useState('');

  //error message
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState([]);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState([]);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState([]);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState([]);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = React.useState([]);
  const [locationErrorMessage, setLocationErrorMessage] = React.useState([]);
  const [panNumberErrorMessage, setPanNumberErrorMessage] = React.useState([]);
  const [serviceErrorMessage, setServiceErrorMessage] = React.useState([]);
  const [employeeStatusErrorMessage, setEmployeeStatusErrorMessage] = React.useState([]);
  const [aboutYouErrorMessage, setAboutYouErrorMessage] = React.useState([]);

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
    setPanNumber("");
    setService("");
    setEmployeeStatus("");
    setAboutYou("");
  }

  const handleFirstNameChange = (event) => {
    const firstNameData = event.target.value;
    setFirstNameErrorMessage("");
    setFirstName(firstNameData);
    if (firstNameData.trim() === "") {
      setFirstNameErrorMessage("First Name onclick cant Be Empty");
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

  const handlePanNumber = (event) => {
    const panNumberData = event.target.value;
    setPanNumberErrorMessage("");
    setPanNumber(panNumberData);
    if (panNumberData.trim() === "") {
      setPanNumberErrorMessage("Pan number cant Be Empty");
    }
  };


  const handleForm = (event) => {
    setCreatingSignal(true);
    event.preventDefault();

    if (firstNameErrorMessage !== '' || lastNameErrorMessage !== '') {
      formSubmissionPreventionFlag = true;
      setCreatingSignal(false);
    }

    console.log("The name from the state is " + firstName + " hello");
    console.log(firstName === '');

    if (firstName === '') {
      formSubmissionPreventionFlag = true;
      setFirstNameErrorMessage("First Name Cant Be Empty.");
      setCreatingSignal(false);
    }

    if (lastName === '') {
      formSubmissionPreventionFlag = true;
      setLastNameErrorMessage("Last Name Cant Be Empty.");
    }

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

    if ((/^\d{9}$/.test(panNumber)) === false) {
      formSubmissionPreventionFlag = true;
      if (panNumber === '') {
        setPanNumberErrorMessage("Pan Number Cant be empty");

      } else {
        setPanNumberErrorMessage("Please enter correct pan number");
      }
      setCreatingSignal(false);
    }
    if (service === '') {
      formSubmissionPreventionFlag = true;
      setServiceErrorMessage("Service cannot be empty.");
      setCreatingSignal(false);
    }

    if (emplyoeeStatus === '') {
      formSubmissionPreventionFlag = true;
      setEmployeeStatusErrorMessage("Employee status cannot be empty.");
    }

    if (aboutYou === '') {
      formSubmissionPreventionFlag = true;
      setAboutYouErrorMessage("About you information cannot be empty.");
      setCreatingSignal(false);
    }

    if (formSubmissionPreventionFlag === false) {
      axios.post('http://localhost:8080/registerMistiri', {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "phoneNo": phoneNumber,
        "location": location,
        "panNo": panNumber,
        "employeeStatus": emplyoeeStatus,
        "service": service,
        "availableStatus": true,
        "aboutYou": aboutYou
      })
        .then(response => {
          // loading =false;
          console.log(response)
          if (response.status === 200) {
            // localStorage.setItem("SESSIONID","")
            // localStorage.clear()
            setTrueValue("The form data is successfully submited");
            console.log("The form data is successfully submited ");
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


  const handleService = (event) => {
    const serviceData = event.target.value;
    setServiceErrorMessage("");
    setService(serviceData);
    if (serviceData.trim() === "") {
      setServiceErrorMessage("Last Name cant Be Empty");
    }
  }

  const handleEmployeeStatus = (event) => {
    const employeeStatusData = event.target.value;
    setEmployeeStatusErrorMessage("");
    setEmployeeStatus(employeeStatusData);
    if (employeeStatusData.trim() === "") {
      setEmployeeStatusErrorMessage("Last Name cant Be Empty");
    }
  };

  const handleAboutYou = (event) => {
    const aboutYouData = event.target.value;
    setAboutYouErrorMessage("");
    setAboutYou(aboutYouData);
    if (aboutYouData.trim() === "") {
      setAboutYouErrorMessage("About you cant Be Empty");
    }
  };

  return (
    <div className='relative w-full h-full bg-zinc-900/80 pt-[100px]'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Building} alt="/" />
      <div className='flex justify-center items-center h-full'>
        {/* Form */}

        <form className='w-[600px] h-full mx-auto bg-white p-9 pt-5 mb-12' onSubmit={handleForm}>
          <h2 className='text-4xl text-[#30333a]  font-bold text-center py-4'>Mistiri Registration</h2>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="First Name" name='firstName' type="text" onChange={handleFirstNameChange} value={firstName} />
            <Suggestion errorMessage={firstNameErrorMessage} />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Last Name" name='lastName' type="text" onChange={handleLastNameChange} value={lastName} />
            <Suggestion errorMessage={lastNameErrorMessage} />
          </div>



          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Email" name='email' type="email" onChange={handleEmail} value={email} />
            <Suggestion errorMessage={emailErrorMessage} />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Password" name='password' type="password" onChange={handlePassword} value={password} />
            <Suggestion errorMessage={passwordErrorMessage} />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Phone Number" name='phoneNo' type="number" onChange={handlePhoneNumber} value={phoneNumber} />
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
          </div>

          {/* <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Location" name='location' type="text" onChange={handleLocation} value={location} />
            <Suggestion errorMessage={locationErrorMessage} />
          </div> */}

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Pan Number" name='panNo' type="number" onChange={handlePanNumber} value={panNumber} />
            <Suggestion errorMessage={panNumberErrorMessage} />
          </div>

          <div className='flex flex-col mb-4 '>
            <div className='border relative bg-gray-100 p-2 text-left'>
              Service:
              <div className='text-base '>
                <select name='service' onChange={handleService} value={service}>
                  <option value="">&nbsp;&nbsp;&nbsp;------</option>
                  <option value="plumber">Plumber</option>
                  <option value="carpenter">Carpenter</option>
                  <option value="engineer">Engineer</option>
                  <option value="mechanics">Mechanics</option>
                  <option value="technician">Technician</option>
                  <option value="painter">Painter</option>
                </select>
              </div>

            </div>
            <Suggestion errorMessage={serviceErrorMessage} />
          </div>

          <div className='flex flex-col mb-4 '>
            <div className='border relative bg-gray-100 p-2 text-left'>
              Employee Status:
              <div className='text-base' value={emplyoeeStatus}>
                <input type="radio" name="employeeStatus" value="self" onChange={handleEmployeeStatus} /> Self <br />
                <input type="radio" name="employeeStatus" value="company" onChange={handleEmployeeStatus} /> Company
              </div>
            </div>
            <Suggestion errorMessage={employeeStatusErrorMessage} />
          </div>

          <div className='flex flex-col mb-4'>
            <div className='border relative bg-gray-100 p-2 text-left'>Documents:
              <div className='text-base '>
                <input className=' ' placeholder="Documents" type="file" />
              </div></div></div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="About You" name='aboutYou' type="text" onChange={handleAboutYou} value={aboutYou} />
            <Suggestion errorMessage={aboutYouErrorMessage} />
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

          <p className='text-lg text-center mt-8'>Want to Register as a <a className='text-xl font-bold relative text-black hover:text-[#fcb858] underline hover:decoration-solid  capitalize hover:uppercase' href="RegisterUser">User</a> instead?</p>



        </form>
      </div>


    </div>
  );
}



export default RegisterMistiri;
