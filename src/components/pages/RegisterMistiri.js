import React from 'react';
import Building from '../../assets/building.jpg'
import axios from 'axios';
import Suggestion from './Suggestion';
import validateEmail from './Utility';

function RegisterMistiri() {

  const [firstName, setFirstName] = React.useState([]);
  const [lastName, setLastName] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [phoneNumber, setPhoneNumber] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [panNumber, setPanNumber] = React.useState([]);
  const [service, setService] = React.useState([]);
  const [emplyoeeStatus, setEmployeeStatus] = React.useState([]);
  const [aboutYou, setAboutYou] = React.useState([]);
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


  // const [creatingSignal, setCreatingSignal] = React.useState('');


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
      setFirstNameErrorMessage("First Name cant Be Empty");
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
    event.preventDefault();

    if (firstNameErrorMessage !== '' || lastNameErrorMessage !== '') {
      formSubmissionPreventionFlag = true;
    }

    if (firstName === '') {
      setFirstNameErrorMessage("First Name Cant Be Empty.");
      formSubmissionPreventionFlag = true;
    }

    if (lastName === '') {
      setLastNameErrorMessage("Last Name Cant Be Empty.");
      formSubmissionPreventionFlag = true;
    }

    if (password === '') {
      setPasswordErrorMessage("Password cannot be empty.");
      formSubmissionPreventionFlag = true;
    }

    if (validateEmail(email) === false) {
      formSubmissionPreventionFlag = true;
      if (email === '') {
        setEmailErrorMessage("Email Cant be Empty");

      } else {
        setEmailErrorMessage("Please enter correct email");
      }
    }
    if ((/^\d{10}$/.test(phoneNumber)) === false) {
      formSubmissionPreventionFlag = true;
      if (phoneNumber === '') {
        setPhoneNumberErrorMessage("Phone Number Cant be empty");

      } else {
        setPhoneNumberErrorMessage("Please enter correct phone number");
      }
    }
    if (location === '') {
      setPasswordErrorMessage("Location cannot be empty.");
      formSubmissionPreventionFlag = true;
    }
    if ((/^\d{9}$/.test(panNumber)) === false) {
      formSubmissionPreventionFlag = true;
      if (panNumber === '') {
        setPanNumberErrorMessage("Pan Number Cant be empty");

      } else {
        setPanNumberErrorMessage("Please enter correct pan number");
      }
    }
    if (service === '') {
      setServiceErrorMessage("Service cannot be empty.");
      formSubmissionPreventionFlag = true;
    }

    if (emplyoeeStatus === '') {
      setEmployeeStatusErrorMessage("Employee status cannot be empty.");
      formSubmissionPreventionFlag = true;
    }

    if (aboutYou === '') {
      setAboutYouErrorMessage("About you information cannot be empty.");
      formSubmissionPreventionFlag = true;
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
          console.log(response)
          if (response.data.success) {
            console.log("The form data is successfully submited ");
            clearFields();
          }
          else {
            console.log(response.data);
            if (response.data.message.firstName) setFirstNameErrorMessage(response.data.message.firstName)
            if (response.data.message.lastName) setLastNameErrorMessage(response.data.message.lastName)
            if (response.data.message.email) setEmailErrorMessage(response.data.message.email)
            if (response.data.message.password) setPassword(response.data.message.password)
            if (response.data.message.phoneNo) setPhoneNumberErrorMessage(response.data.message.phoneNo)
            if (response.data.message.location) setLocationErrorMessage(response.data.message.location)
            if (response.data.message.panNo) setPanNumberErrorMessage(response.data.message.panNo)
            if (response.data.message.service) setServiceErrorMessage(response.data.message.service)
            if (response.data.message.emplyoeeStatus) setEmployeeStatusErrorMessage(response.data.message.emplyoeeStatus)
          }
        })
        .catch(error => {
          console.log("error cacthed");
          console.log(error.response)
        });
    }


    // event.preventDefault();
    // //setCreatingSignal(true);

    // const url = 'http://localhost:8080/registerMistiri';

    // // if (firstNameErrorMessage !== '' || lastNameErrorMessage !== '') {
    // //   formSubmissionPreventionFlag = true;
    // // }

    // if (firstName === '') {
    //   setFirstNameErrorMessage("First Name Cant Be Empty.");
    //   formSubmissionPreventionFlag = true;
    // }

    // if (lastName === '') {
    //   setLastNameErrorMessage("Last Name Cant Be Empty.");
    //   formSubmissionPreventionFlag = true;
    // }

    // if (password === '') {
    //   setPasswordErrorMessage("Password cannot be empty.");
    //   formSubmissionPreventionFlag = true;
    // }

    // if (validateEmail(email) === false) {
    //   formSubmissionPreventionFlag = true;
    //   if (email === '') {
    //     setEmailErrorMessage("Email Cant be Empty");

    //   } else {
    //     setEmailErrorMessage("Please enter correct email");
    //   }
    // }
    // if ((/^\d{10}$/.test(phoneNumber)) === false) {
    //   formSubmissionPreventionFlag = true;
    //   if (phoneNumber === '') {
    //     setPhoneNumberErrorMessage("Phone Number Cant be empty");

    //   } else {
    //     setPhoneNumberErrorMessage("Please enter correct phone number");
    //   }
    // }
    // if (location === '') {
    //   setPasswordErrorMessage("Location cannot be empty.");
    //   formSubmissionPreventionFlag = true;
    // }
    // if ((/^\d{9}$/.test(panNumber)) === false) {
    //   formSubmissionPreventionFlag = true;
    //   if (panNumber === '') {
    //     setPanNumberErrorMessage("Pan Number Cant be empty");

    //   } else {
    //     setPanNumberErrorMessage("Please enter correct pan number");
    //   }
    // }
    // if (service === '') {
    //   setServerErrorMessage("Service cannot be empty.");
    //   formSubmissionPreventionFlag = true;
    // }

    // if (emplyoeeStatus === '') {
    //   setEmployeeStatusErrorMessage("Employee status cannot be empty.");
    //   formSubmissionPreventionFlag = true;
    // }

    // if (aboutYou === '') {
    //   setAboutYouErrorMessage("About you information cannot be empty.");
    //   formSubmissionPreventionFlag = true;
    // }

    // if (formSubmissionPreventionFlag === false) {
    //   axios.post(url,
    //     {
    //       firstName: "Shabda",
    //       lastName: "Pokheral",
    //       email: "anuragbaskotaaa@gmail.com",
    //       password: "123456",
    //       phoneNo: "9823366695",
    //       location: "Biratnagar",
    //       panNo: "123456789",
    //       employeeStatus: "self-business",
    //       service: "plumber",
    //       availableStatus: true,
    //       aboutYou: "hello, billu mau is my lop"
    //     })
    //     .then(res => {
    //       const data = res.data;
    //       console.log(data);
    //       if (data.success) {
    //         console.log("The form data is successfully submited ");
    //         clearFields();
    //        }
    //       // else {
    //       //   console.log(data);
    //       //   if (data.message.firstName) setFirstNameErrorMessage(data.message.firstName)
    //       //   if (data.message.lastName) setLastNameErrorMessage(data.message.lastName)
    //       //   if (data.message.email) setEmailErrorMessage(data.message.email)
    //       //   if (data.message.password) setPassword(data.message.password)
    //       //   if (data.message.phoneNo) setPhoneNumberErrorMessage(data.message.phoneNo)
    //       //   if (data.message.location) setLocationErrorMessage(data.message.location)
    //       //   if (data.message.panNo) setPanNumberErrorMessage(data.message.panNo)
    //       //   if (data.message.service) setServiceErrorMessage(data.message.service)
    //       //   if (data.message.emplyoeeStatus) setEmployeeStatusErrorMessage(data.message.emplyoeeStatus)
    //       // }
    //       // setCreatingSignal(false);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       console.log("Error !!!!!!!");
    //       //setCreatingSignal(false);
    //       //end gif
    //     })
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
    <div className='relative w-full h-[1250px] bg-zinc-900/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Building} alt="/" />
      <div className='flex justify-center items-center h-full'>
        {/* Form */}

        <form className='max-w-[600px] w-full mx-auto bg-white p-9 pt-2' onSubmit={handleForm}>
          <h2 className='text-4xl text-[#30333a]  font-bold text-center py-4'>Mistiri Registration</h2>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="First Name..." name='firstName' type="text" onChange={handleFirstNameChange} value={firstName} />
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

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Location" name='location' type="text" onChange={handleLocation} value={location} />
            <Suggestion errorMessage={locationErrorMessage} />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Pan Number" name='panNo' type="number" onChange={handlePanNumber} value={panNumber} />
            <Suggestion errorMessage={panNumberErrorMessage} />
          </div>

          <div className='flex flex-col mb-4 '>
            <div className='border relative bg-gray-100 p-2 text-left'>
              Service:
              <div className='text-base '>
<<<<<<< HEAD
                <select name='service'>
                  <option value="plumber">Carpenter</option>
                  <option value="engineer">Engineer</option>
=======
                <select name='service' onChange={handleService} value={service}>
>>>>>>> d0db320 (connect register with backend api)
                  <option value="plumber">Plumber</option>
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
          </div>

          <button className='w-full py-3 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
            Register
          </button>
          {/* Link to mistiri login */}

          <p className='text-lg text-center mt-8'>Want to Register as a <a className='text-xl font-bold relative text-black hover:text-[#fcb858] underline hover:decoration-solid  capitalize hover:uppercase' href="RegisterUser">User</a> instead?</p>



        </form>
      </div>

    </div>
  );
}



export default RegisterMistiri;
