import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [formDetails, setFormDetails] = useState({
    email:"",
    password: ""
  })
  const handleOnChange = (e)=>{
    setFormDetails({...formDetails,
    [e.target.name]: e.target.value
    })
  }
  const handlSubmit = async(e)=>{
    e.preventDefault();
   loginFunction();
  }
  const handleRedirect = (userInfo) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    navigate('/')
  };

  const loginFunction = async ()=>{
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }
      const loadingToastId = toast.loading('Logging in...', {
        autoClose: false,
        closeOnClick: false
      });
      const {data} = await axios.post('/api/users/login', formDetails,config);
      toast.dismiss(loadingToastId);
      if(data.success){
        toast.success(data.message, {
          autoClose: 1000,
          closeOnClick: true,
          onClose:  async()=>handleRedirect(await data.data)
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
            Login to city shop
          </span>
          
          <form onSubmit={handlSubmit} className="mb-4">
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
                Password
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
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              Login
            </button>
          </form>
          <Link className="text-yellow-700 text-center text-sm" to="/signup">
            Don't have an account? Create one!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
