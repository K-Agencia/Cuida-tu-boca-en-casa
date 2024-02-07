import React from 'react';
import { RoutersLinks, TOKEN } from '../constantes/RoutersLinks';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../componentes/NavBar';

const PrivateRoute = () => {

  if (!localStorage.getItem(TOKEN)) {
    return <Navigate to={RoutersLinks.Login} />
  }

  return (
    <>
      <NavBar show={true} />
      <Outlet />
    </>
  );
};

export default PrivateRoute;