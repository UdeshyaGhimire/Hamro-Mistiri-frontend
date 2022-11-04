import React, { useState } from 'react';

import High from '../../assets/high.jpg'
import { useParams } from 'react-router-dom';
import DashboardComU from "./DashboardComU";
import axios from 'axios';
import Suggestion from './Suggestion';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';

function DashboardUserEdit() {

  const params = useParams();
  const userId = params.id;

  const [userDetail, setUserDetail] = React.useState([]);

  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url1 = `http://localhost:8080/customerDashboard/${userId}`;
    axios.get(url1)
      .then((res) => {
        // console.log(res.data);
        console.log(res.data);
        setUserDetail(res.data);

      })
      .catch(err => console.log(err));
  }, []);


  //posting 


  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [location, setLocation] = React.useState('');


  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState([]);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState([]);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = React.useState([]);
  const [locationErrorMessage, setLocationErrorMessage] = React.useState([]);


  const [postErrorMessage, setPostErrorMessage] = React.useState([]);
  const [creatingSignal, setCreatingSignal] = React.useState(false);
  const [trueValue, setTrueValue] = React.useState([]);
  let formSubmissionPreventionFlag = false;


  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setLocation("");
  }

  //handeling onchange 


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

  //Handeling the form

  const handleForm = (event) => {
    setCreatingSignal(true);
    event.preventDefault();

    if (firstNameErrorMessage !== '' || lastNameErrorMessage !== '') {
      formSubmissionPreventionFlag = true;
      setCreatingSignal(false);
    }


    if (firstName === '') {
      formSubmissionPreventionFlag = true;
      setFirstNameErrorMessage("First Name Cant Be Empty.");
      setCreatingSignal(false);
    }

    if (lastName === '') {
      formSubmissionPreventionFlag = true;
      setLastNameErrorMessage("Last Name Cant Be Empty.");
    }

    if ((/^\d{10}$/.test(phoneNumber)) === false) {
      formSubmissionPreventionFlag = true;
      if (phoneNumber === '') {
        setPhoneNumberErrorMessage("Phone Number Cant be empty");
      } else {
        setPhoneNumberErrorMessage("Phone number must be of 10 digits");
      }
      setCreatingSignal(false);
    }


    if (location === '') {
      formSubmissionPreventionFlag = true;
      setLocationErrorMessage("Location cannot be empty.");
      setCreatingSignal(false);
    }

    if (formSubmissionPreventionFlag === false) {
      axios.put('http://localhost:8080/updateCustomer',
        {
          "id": userId,
          "firstName": firstName,
          "lastName": lastName,
          "phoneNo": phoneNumber,
          "location": location
        }
      )
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            setTrueValue("You have successfully registered!");
            console.log("You're profile has been updated successfully");
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
    <div>
      <div className=' md:grid grid-cols-5 w-full h-full '>


        <DashboardComU />


        {/* Edit Form Starts Here */}
        <div className='col-span-4'>

          <div className='relative w-full h-[900px] bg-black/70'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
            <div className='flex justify-center items-center h-full'>
              {/* Form */}

              <form className='max-w-[800px] w-full mx-auto bg-white  pt-4 pl-[65px] p-[65px] border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg' onSubmit={handleForm}>
                <h2 className='text-4xl text-[#000000]  font-bold text-center py-8'>Edit User Profile</h2>

                <div className='grid grid-cols-4 mb-4'>
                  <p className='text-[#000000] font-bold pt-[8px]'>First Name:</p>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2  ' placeholder={userDetail.firstName} type="text" onChange={handleFirstNameChange} value={firstName} />
                </div>
                <div className='flex justify-center items-center'><Suggestion errorMessage={firstNameErrorMessage} /> </div>

                <div className='grid grid-cols-4 mb-4'>
                  <p className='text-[#000000] font-bold pt-[8px]'>Last Name:</p>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2 ' placeholder={userDetail.lastName} type="text" onChange={handleLastNameChange} value={lastName} />
                </div>
                <div className='flex justify-center items-center'><Suggestion errorMessage={lastNameErrorMessage} /> </div>

                <div className='grid grid-cols-4 mb-4'>
                  <div className='text-[#000000] font-bold  pt-[8px]'>Phone Number:</div>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2 ' placeholder={userDetail.phoneNo} type="number" onChange={handlePhoneNumber} value={phoneNumber} />
                </div>
                <div className='flex justify-center items-center'><Suggestion errorMessage={phoneNumberErrorMessage} /> </div>

                <div className='grid grid-cols-4 mb-4'>
                  <div className='text-[#000000] font-bold  pt-[8px]'>Loaction:</div>
                  <div className='border relative bg-gray-100 p-2 text-left '>
                    <select name='loaction' onChange={handleLocation} value={location}  >
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
                <div className='flex justify-center items-center'>
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
                      Edit
                    </button>
                  }

                </div>

              </form>
            </div>

          </div>

        </div>
      </div >



    </div >


  );

}

export default DashboardUserEdit;
