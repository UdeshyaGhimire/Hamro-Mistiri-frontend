import React, { useState } from 'react';
import High from '../../assets/high.jpg'
import DashboardComU from "./DashboardComU";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Suggestion from './Suggestion';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';

function DashboardUserDelete() {

  const params = useParams();
  const userId = params.id;

  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');


  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState([]);
  const [rePasswordErrorMessage, setRePasswordErrorMessage] = React.useState([]);


  const [postErrorMessage, setPostErrorMessage] = React.useState([]);
  const [creatingSignal, setCreatingSignal] = React.useState(false);
  const [trueValue, setTrueValue] = React.useState([]);
  let formSubmissionPreventionFlag = false;

  const clearFields = () => {
    setPassword("");
    setRePassword("");
  }


  const handlePasswordChange = (event) => {
    const firstNameData = event.target.value;
    setPasswordErrorMessage("");
    setPassword(firstNameData);
    if (firstNameData.trim() === "") {
      setPasswordErrorMessage("Password cant Be Empty");
    }
  };


  const handleRePasswordChange = (event) => {
    const firstNameData = event.target.value;
    setRePasswordErrorMessage("");
    setRePassword(firstNameData);
    if (firstNameData.trim() === "") {
      setRePasswordErrorMessage("Re-Password cant Be Empty");
    }
  };


  const handleForm = (event) => {
    setCreatingSignal(true);
    event.preventDefault();

    if (password === '') {
      formSubmissionPreventionFlag = true;
      setPasswordErrorMessage("Password Can't Be Empty.");
      setCreatingSignal(false);
    }

    if (rePassword === '') {
      formSubmissionPreventionFlag = true;
      setRePasswordErrorMessage("Re-Password Can't Be Empty.");
      setCreatingSignal(false);
    } else {
      if (password !== rePassword) {
        formSubmissionPreventionFlag = true;
        setRePasswordErrorMessage("Enter same password");
        setCreatingSignal(false);
      }
    }


    if (formSubmissionPreventionFlag === false) {
      console.log(password);
      axios.delete(`http://localhost:8080/deleteCustomer/${userId}`,{
        data: {  "password": password }
      }
      )
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            setTrueValue("You have successfully deleted!");
            clearFields();
          }
          else {
            console.log(response.data);
            console.log(response.data.message);
          }
          setCreatingSignal(false);
          localStorage.clear();
          window.location.href = "/loginuser";
          alert("You have successfully deleted you'r account");
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
    <div className=' md:grid grid-cols-5 w-full h-full '>


      <DashboardComU />


      {/* Edit Form Starts Here */}
      <div className='col-span-4'>

        <div className='relative w-full h-[900px] bg-black/80'>
          <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
          <div className='flex justify-center items-center h-full'>

            {/* Form */}
            <form className='max-w-[650px] w-full mx-auto bg-white  pt-4  p-[65px] border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg' onSubmit={handleForm}>
              <h2 className='text-2xl text-[#000000]  font-bold text-center py-8'>Are You Sure You Want To Delete Your Profile?</h2>


              <div className='flex flex-col mb-4'>
                <input className='border relative bg-gray-100 p-2 ' placeholder="Password" type="password" name='password' onChange={handlePasswordChange} value={password} />
                <Suggestion errorMessage={passwordErrorMessage} />
              </div>

              <div className='flex flex-col mb-4'>
                <input className='border relative bg-gray-100 p-2 ' placeholder="Re-Password" type="password" name='password' onChange={handleRePasswordChange} value={rePassword} />
                <Suggestion errorMessage={rePasswordErrorMessage} />
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
                    Yes
                  </button>
                }
              </div>
            </form>
          </div>

        </div>

      </div>
    </div >

  );

}

export default DashboardUserDelete;
