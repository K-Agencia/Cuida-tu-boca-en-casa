import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutersLinks } from '../constantes/RoutersLinks';
import Login from '../paginas/Login';
import Menu from '../paginas/Menu';
import Registrarse from '../paginas/Registrarse';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const RouterDom = () => {
   return (
      <div className='RouterDom'>
         <Routes>
            <Route path={RoutersLinks.Login} element={<PublicRoute />}>
               <Route index element={<Login />} />
               <Route exact path={RoutersLinks.Registrarse} element={<Registrarse />} />
            </Route>
            <Route path={RoutersLinks.Reproductor} element={<PrivateRoute />}>
               <Route index element={<Menu />} />
            </Route>
         </Routes>
      </div>
   );
};

export default RouterDom;