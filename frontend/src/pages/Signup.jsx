import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email:"",
    password: "",
    confirmPassword: ""
  })
  const handleOnChange = (e)=>{
    setFormDetails({...formDetails,
    [e.target.name]: e.target.value
    })
  }
  const handlSubmit = async(e)=>{
    e.preventDefault();
    if(formDetails.password.length < 8) return toast.warning("Password should be at least 8 characters")
    if(formDetails.password !== formDetails.confirmPassword) return toast.warning("Password and Confirm Password should match")
   signupFunction();
  }

  const signupFunction = async ()=>{
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }
      const loadingToastId = toast.loading('Creating your account...', {
        autoClose: false,
        closeOnClick: false
      });
      const {data} = await axios.post('/api/users/signup', formDetails, config);
      toast.dismiss(loadingToastId);
      if(data.success){
        toast.success(data.message, {
          autoClose: 1000,
          closeOnClick: true,
          onClose:  ()=>navigate('/login')
        })
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Some Server Occured!');
    }
  }
  return (
    <>
    <ToastContainer/>
         <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Create an account
          </span>
          
          <form onSubmit={handlSubmit} className="mb-4">
            <div className="mb-4 md:w-full">
              <label for="email" className="block text-xs mb-1">
                Full Name
              </label>
              <input
              value={formDetails?.fullName}
              onChange={handleOnChange}
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4 md:w-full">
              <label for="email" className="block text-xs mb-1">
                Email
              </label>
              <input
              value={formDetails?.email}
              onChange={handleOnChange}
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6 md:w-full">
              <label for="password" className="block text-xs mb-1">
                Password (Must be 8 characters)
              </label>
              <input
              value={formDetails?.password}
              onChange={handleOnChange}
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-6 md:w-full">
              <label for="password" className="block text-xs mb-1">
                Confirm Password
              </label>
              <input
              value={formDetails?.confirmPassword}
              onChange={handleOnChange}
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
             Signup
            </button>
          </form>
          <Link className="text-yellow-700 text-center text-sm" to="/login">
            Already logged in?
          </Link>
        </div>
      </div>
    </>
  )
}

export default Signup