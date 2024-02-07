import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { RoutersLinks, TOKEN } from '../constantes/RoutersLinks';
import '../css/Perfil.css';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

const Perfil = () => {

   const [show, setShow] = useState(false);
   const navigate = useNavigate();

   const usuario = `${cookies.get('nombreUsuario')} ${cookies.get('apellidoUsuario')}`;

   const cerrarSesion = () => {

      let listCookies = cookies.getAll();

      for (const property in listCookies) {
         cookies.remove(property);
      }

      localStorage.removeItem(TOKEN);

      navigate(RoutersLinks.Login);
   }

   return (
      <div className='Perfil'>
         <div className='imgPerfil' onClick={() => setShow(!show)}>
            <h2>{usuario[0].toUpperCase()}</h2>
         </div>

         <div className={show ? "Overlay" : "noShow"} onClick={() => setShow(false)}></div>

         <div className={show ? "contenidoPerfil" : "noShow"}>
            {usuario}
            <hr />
            <Button variant='primary' onClick={() => cerrarSesion()}>Cerrar sesión</Button>
         </div>
      </div>
   );
};

export default Perfil;