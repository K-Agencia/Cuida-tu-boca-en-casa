import React from 'react';
import { RoutersLinks } from '../constantes/RoutersLinks.js';
import '../css/NavBar.css';
import { Imagenes } from '../constantes/Imagenes.js';
import { Container, Navbar } from 'react-bootstrap';
import Perfil from './Perfil.js';

const NavBar = ({ show = false }) => {
   return (
      <Navbar bg="light" variant="light">
         <Container>
            <Navbar.Brand href={RoutersLinks.Login} className='logoNavBar'>
               <img src={Imagenes.Logo} alt="" />
            </Navbar.Brand>
            {show &&
               <Perfil />
            }
         </Container>
      </Navbar>
   );
};

export default NavBar;