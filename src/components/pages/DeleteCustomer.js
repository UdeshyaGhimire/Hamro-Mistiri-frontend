import React from 'react';
import HireImg from '../../assets/hire.jpg'
import AdminCustomer from './AdminCustomer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Suggestion from './Suggestion';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';


function DeleteCustomer() {

  const params = useParams();
  const mistiriId = params.id;


  
  

//error
  const [postErrorMessage, setPostErrorMessage] = React.useState([]);



  //Buffer 
  const [creatingSignal, setCreatingSignal] = React.useState(false);

  //successMessage
  const [trueValue, setTrueValue] = React.useState([]);





  const handleForm = (event) => {
    if ( localStorage.getItem("role") !== "admin") {
      window.location.href = "/";
      alert("You cannot delete mistiri's");  
    } else {

      setCreatingSignal(true);
      event.preventDefault();

      axios.delete(`http://localhost:8080/deleteCustomerByAdmin/${mistiriId}`)
          .then(response => {
            // loading =false;
            console.log(response)
            if (response.status === 200) {
              setTrueValue("You have deleted this mistiri");
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
      <AdminCustomer />
      <div className='fixed inset-0 bg-clack bg-opacity-30 bg-zinc-800/60 backdrop-blur-sm flex justify-center items-center'>

        <div className='rounded-xl border-[5px] border-[#484949] mt-[165px]   bg-white m-auto h-[550px] shadow-lg  shadow-gray-200 sm:max-w-[900px]  '>
          
          <div className='p-4  '>
            {/* to close form */}
            <a className='flex justify-end text-2xl font-bold text-gray-400 ' href='/'><button className=''></button>X</a>

            {/* Form starts here */}
            <form className='pt-[65px]' onSubmit={handleForm}>

              <h2 className='text-4xl font-bold text-center pt-0 py-8 hover:text-[#f09e2a]'>Are you sure you want to delete this customer ?</h2>
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
                   Yes
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
export default DeleteCustomer;


