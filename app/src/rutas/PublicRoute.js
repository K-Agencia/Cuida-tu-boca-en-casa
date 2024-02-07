import React from 'react';
import { RoutersLinks, TOKEN } from '../constantes/RoutersLinks';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../componentes/NavBar';

const PublicRoute = () => {

  if (localStorage.getItem(TOKEN)) {
    return <Navigate to={RoutersLinks.Reproductor} />
  }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PublicRoute;