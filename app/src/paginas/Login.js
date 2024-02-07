import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RoutersLinks, TOKEN, urlApi } from '../constantes/RoutersLinks';

import '../css/Registrarse.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';

const cookies = new Cookies();

const Login = () => {

   const navigate = useNavigate();

   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         correo: ''
      }
   })
   const [loading, setLoading] = useState(false);

   const onSubmit = ({ correo }) => {

      setLoading(true);
      axios({
         baseURL: urlApi,
         method: 'get',
         url: '/login',
         auth: {
            username: correo,
         },
      })
         .then(({ data }) => {
            const { token, idOodntologo, nombreOodntologo, apellidoOodntologo } = data;
            localStorage.setItem(TOKEN, token);

            cookies.set('nombreUsuario', nombreOodntologo, { path: '/' });
            cookies.set('apellidoUsuario', apellidoOodntologo, { path: '/' });
            cookies.set('idUsuario', idOodntologo, { path: '/' });

            navigate(RoutersLinks.Reproductor);
         })
         .catch(({ response }) => {
            const message = response ? response.data : "No se puede realizar la conexión con el servidor, intente mas tarde.";
            alert({ type: 'error', text: message });
         })
         .finally(() => {
            setLoading(false);
         });
   }

   const alert = ({ type = 'success', text = "" }) => {
      return toast[type](text, {
         duration: 4000,
         position: 'top-center',
      })
   }

   return (
      <Container className='body'>
         <div className="formRegistrarse">
            <div className="seccionLogin mb-5">
               <p>¿Aún no estás registrado? </p>
               <Link className='linkSeccion' to={RoutersLinks.Registrarse}>Regístrate</Link>
            </div>

            <hr />
            <form className="mx-3" onSubmit={handleSubmit(onSubmit)}>
               <Row>
                  <h4>Si usted está registrado, ingrese su correo</h4>
                  <Col xs={12}>
                     <Form.Group className="mb-2" controlId="correo">
                        <Form.Control {...register("correo", {
                           required: "Este campo es requerido",
                           maxLength: {
                              value: 40,
                              message: "Este campo tiene un límite de 40 caracteres"
                           }
                        })} type="text" placeholder="name@example.com"
                           isInvalid={errors.correo}
                        />
                        {errors.correo && <Form.Control.Feedback type="invalid">{errors.correo.message}</Form.Control.Feedback>}
                     </Form.Group>
                  </Col>
                  <Col xs={12} className="my-3 center">
                     <Button variant="primary" type="submit">
                        Enviar
                     </Button>
                  </Col>
               </Row>

               {loading &&
                  <div className="Overlay opaco">
                     <Spinner animation="border" variant="info" />
                  </div>
               }

               <Toaster />

            </form>
         </div>
      </Container>
   );
};

export default Login;