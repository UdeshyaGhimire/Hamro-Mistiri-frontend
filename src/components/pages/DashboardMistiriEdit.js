import React from 'react';
import High from '../../assets/high.jpg'
import DashboardComM from "./DashboardComM";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Suggestion from './Suggestion';
import SuccessText from './SuccessText';
import LoadingIcons from 'react-loading-icons';


function DashboardMistirEdit() {

    const params = useParams();
    const userId = params.id;


    const [mistiriDetail, setMistiriDetail] = React.useState([]);

    React.useEffect(() => {
        console.log("hello inside useeEffect");
        const url1 = `http://localhost:8080/mistiriDashboard/${userId}`;
        axios.get(url1)
            .then((res) => {
                // console.log(res.data);
                console.log(res.data);
                setMistiriDetail(res.data);

            })
            .catch(err => console.log(err));
    }, []);


    //posting 


    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [panNumber, setPanNumber] = React.useState('');
    const [aboutYou, setAboutYou] = React.useState('');
    const [availability, setAvailibilty] = React.useState('');


    const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState([]);
    const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState([]);
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = React.useState([]);
    const [locationErrorMessage, setLocationErrorMessage] = React.useState([]);
    const [panNumberErrorMessage, setPanNumberErrorMessage] = React.useState([]);
    const [aboutYouErrorMessage, setAboutYouErrorMessage] = React.useState([]);
    const [availabilityErrorMessage, setAvailabilityErrorMessage] = React.useState([]);




    const [postErrorMessage, setPostErrorMessage] = React.useState([]);
    const [creatingSignal, setCreatingSignal] = React.useState(false);
    const [trueValue, setTrueValue] = React.useState([]);
    let formSubmissionPreventionFlag = false;

    const clearFields = () => {
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setLocation("");
        setPanNumber("");
        setAboutYou("");
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

    const handlePanNumber = (event) => {
        const panNumberData = event.target.value;
        setPanNumberErrorMessage("");
        setPanNumber(panNumberData);
        if (panNumberData.trim() === "") {
            setPanNumberErrorMessage("Pan number cant Be Empty");
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


    const handleAvaibality = (event) => {
        const aboutYouData = event.target.value;
        setAvailabilityErrorMessage("");
        setAvailibilty(aboutYouData);
        if (aboutYouData.trim() === "") {
            setAvailabilityErrorMessage("About you cant Be Empty");
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


        if ((/^\d{9}$/.test(panNumber)) === false) {
            formSubmissionPreventionFlag = true;
            if (panNumber === '') {
                setPanNumberErrorMessage("Pan Number Cant be empty");

            } else {
                setPanNumberErrorMessage("Pan number must be of 9 digits");
            }
            setCreatingSignal(false);
        }

        if (aboutYou === '') {
            formSubmissionPreventionFlag = true;
            setAboutYouErrorMessage("About you information cannot be empty.");
            setCreatingSignal(false);
        }

        if (formSubmissionPreventionFlag === false) {
            axios.put('http://localhost:8080/updateMistiri',
                {
                    "id": mistiriDetail.id,
                    "customer": {
                        "firstName": firstName,
                        "lastName": lastName,
                        "location": location,
                        "phoneNo": phoneNumber
                    },
                    "panNo": panNumber,
                    "availableStatus": availability === "true" ? true : false,
                    "aboutYou": aboutYou
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


                <DashboardComM />


                {/* Edit Form Starts Here */}
                <div className='col-span-4'>

                    <div className='relative w-full h-[940px] bg-black/78'>
                        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
                        <div className='flex justify-center items-center h-full'>
                            {/* Form */}

                            <form className='max-w-[800px] w-full mx-auto bg-white p-[35px] pt-2 pl-[65px] border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg' onSubmit={handleForm}>
                                <h2 className='text-4xl text-[#000000]  font-bold text-center py-8'>Edit Mistiri Profile</h2>

                                <div className='grid grid-cols-2 mb-4 bg-white '>
                                    <div className='text-[#000000] font-bold pt-[8px] text-right'>Availability:
                                    </div>

                                    <div className='text-base w-[155px] bg-gray-100 relative text-left p-1 ml-3 pl-3'>
                                        <select name='availability' onChange={handleAvaibality} value={availability}>
                                            <option value="">&nbsp;&nbsp;&nbsp;------</option>
                                            <option value="true" >Available</option>
                                            <option value="false" >Not Available</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div className='flex justify-center items-center'><Suggestion errorMessage={availabilityErrorMessage} /> </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>First Name:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2  ' placeholder={mistiriDetail.customer?.firstName} type="text" onChange={handleFirstNameChange} value={firstName} />
                                </div>
                                <div className='flex justify-center items-center'><Suggestion errorMessage={firstNameErrorMessage} /> </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>Last Name:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder={mistiriDetail.customer?.lastName} type="text" onChange={handleLastNameChange} value={lastName} />
                    
                                </div>
                                <div className='flex justify-center items-center'><Suggestion errorMessage={lastNameErrorMessage} /> </div>





                                <div className='grid grid-cols-4 mb-4'>
                                    <div className='text-[#000000] font-bold  pt-[8px]'>Phone Number:</div>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder={mistiriDetail.customer?.phoneNo} type="number" onChange={handlePhoneNumber} value={phoneNumber} />

                                </div>
                                <div className='flex justify-center items-center'><Suggestion errorMessage={phoneNumberErrorMessage} /> </div>


                                <div className='grid grid-cols-4 mb-4'>
                                    <div className='text-[#000000] font-bold  pt-[8px]'>Loaction:</div>
                                    <div className='border relative bg-gray-100 p-2 text-left '>
                                        <select name='loaction' onChange={handleLocation} value={location} >
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
                                <div className='flex justify-center items-center'><Suggestion errorMessage={locationErrorMessage} /></div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold  pt-[8px]'>Pan Number:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder={mistiriDetail.panNo} type="number" onChange={handlePanNumber} value={panNumber} />

                                </div>
                                <div className='flex justify-center items-center'><Suggestion errorMessage={panNumberErrorMessage} /></div>


                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>About You:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder={mistiriDetail.aboutYou} type="text" onChange={handleAboutYou} value={aboutYou} />

                                </div>
                                <div className='flex justify-center items-center'><Suggestion errorMessage={aboutYouErrorMessage} />
                                    <Suggestion errorMessage={postErrorMessage} />
                                    <SuccessText errorMessage={trueValue} /></div>

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
                                {/* Link to mistiri login */}





                            </form>
                        </div>

                    </div>


                </div>

            </div>
        </div >






    );

}

export default DashboardMistirEdit;
