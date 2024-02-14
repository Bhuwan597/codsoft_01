import React from 'react';
import { Route, Navigate,Outlet } from 'react-router-dom';
import { UserState } from '../context/UserContextProvider';

const GuestRoute = () => {
  const { user } = UserState();
  const storedUser = JSON.parse(localStorage.getItem('userInfo'));
  if (user||storedUser) {
    return <Navigate to="/" />;
  }
  return <Outlet/>
};

export default GuestRoute;
