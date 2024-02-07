import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RoutersLinks, urlApi } from '../constantes/RoutersLinks';

import '../css/Registrarse.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const Registrarse = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      noIdentificacion: '',
      nombre: '',
      apellido: '',
      direccion: '',
      ciudad: '',
      correo: '',
      celular: '',
      especialidad: '',
      autorizar: false,
    }
  });
  const [loading, setLoading] = useState(false);

  const autorizar = watch('autorizar');
  const required = "Este campo es requerido";
  const maxLength = 40;

  const onSubmit = (data) => {
    setLoading(true);
    axios({
      baseURL: urlApi,
      method: 'post',
      url: '/registro',
      data: data
    })
      .then((response) => {
        alert({ text: response.data })
        alert({ type: 'loading', text: "Redireccionando a la página de inicio de sesión..." })

        setTimeout(() => {
          navigate(`${RoutersLinks.Login}`);
        }, 3000);
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
        {/* <h1>Registrarse</h1> */}
        <form className="mx-3" onSubmit={handleSubmit(onSubmit)}>
          <Row className='formularioCuidaTuBoca'>

            <h1>Registrarse</h1>
            <hr />
            <p><b>*</b> Campo requerido</p>
            <Col xs={12}>

              <Form.Group className="mb-2" controlId="noIdentificacion">
                <Form.Label><b>*</b> Número de identificación:</Form.Label>
                <Form.Control {...register("noIdentificacion", {
                  required: required,
                  maxLength: {
                    value: 15,
                    message: "Este campo tiene un límite de 15 caracteres"
                  }
                })}
                  type="number" placeholder="C.C."
                  isInvalid={errors.noIdentificacion}
                />
                {errors.noIdentificacion && <Form.Control.Feedback type="invalid">{errors.noIdentificacion.message}</Form.Control.Feedback>}
              </Form.Group>

              <Form.Group className="mb-2" controlId="nombre">
                <Form.Label><b>*</b> Nombres:</Form.Label>
                <Form.Control {...register("nombre", {
                  required: required,
                  maxLength: {
                    value: maxLength,
                    message: `Este campo tiene un límite de ${maxLength} caracteres`
                  }
                })}
                  type="text" placeholder="Nombre"
                  isInvalid={errors.nombre}
                />
                {errors.nombre && <Form.Control.Feedback type="invalid">{errors.nombre.message}</Form.Control.Feedback>}
              </Form.Group>

              <Form.Group className="mb-2" controlId="apellido">
                <Form.Label><b>*</b> Apellidos:</Form.Label>
                <Form.Control {...register("apellido", {
                  required: required,
                  maxLength: {
                    value: maxLength,
                    message: `Este campo tiene un límite de ${maxLength} caracteres`
                  }
                })}
                  type="text" placeholder="Apellido"
                  isInvalid={errors.apellido}
                />
                {errors.apellido && <Form.Control.Feedback type="invalid">{errors.apellido.message}</Form.Control.Feedback>}
              </Form.Group>

              <Form.Group className="mb-2" controlId="direccion">
                <Form.Label><b>*</b> Dirección del consultorio:</Form.Label>
                <Form.Control {...register("direccion", {
                  required: required,
                  maxLength: {
                    value: maxLength,
                    message: `Este campo tiene un límite de ${maxLength} caracteres`
                  }
                })}
                  type="text" placeholder="Dirección de consultorio"
                  isInvalid={errors.direccion}
                />
                {errors.direccion && <Form.Control.Feedback type="invalid">{errors.direccion.message}</Form.Control.Feedback>}
              </Form.Group>

              <Form.Group className="mb-2" controlId="ciudad">
                <Form.Label><b>*</b> Ciudad del consultorio:</Form.Label>
                <Form.Control {...register("ciudad", {
                  required: required,
                  maxLength: {
                    value: maxLength,
                    message: `Este campo tiene un límite de ${maxLength} caracteres`
                  }
                })}
                  type="text" placeholder="Ciudad"
                  isInvalid={errors.ciudad}
                />
                {errors.ciudad && <Form.Control.Feedback type="invalid">{errors.ciudad.message}</Form.Control.Feedback>}
              </Form.Group>

              <Form.Group className="mb-2" controlId="correo">
                <Form.Label><b>*</b> Correo electrónico:</Form.Label>
                <Form.Control {...register("correo", {
                  required: required,
                  maxLength: {
                    value: maxLength,
                    message: `Este campo tiene un límite de ${maxLength} caracteres`
                  }
                })}
                  type="text" placeholder="name@example.com"
                  isInvalid={errors.correo}
                />
                {errors.correo && <Form.Control.Feedback type="invalid">{errors.correo.message}</Form.Control.Feedback>}
              </Form.Group>

              <Form.Group className="mb-2" controlId="celular">
                <Form.Label><b>*</b> Celular:</Form.Label>
                <Form.Control {...register("celular", {
                  required: required,
                  maxLength: {
                    value: 15,
                    message: `Este campo tiene un límite de ${15} caracteres`
                  }
                })}
                  type="number" placeholder="Celular"
                  isInvalid={errors.celular}
                />
                {errors.celular && <Form.Control.Feedback type="invalid">{errors.celular.message}</Form.Control.Feedback>}
              </Form.Group>

              <Form.Group className="mb-2" controlId="especialidad">
                <Form.Label><b>*</b> Especialidad:</Form.Label>
                <Form.Control {...register("especialidad", {
                  required: required,
                  maxLength: {
                    value: maxLength,
                    message: `Este campo tiene un límite de ${maxLength} caracteres`
                  }
                })}
                  type="text" placeholder="Especialidad"
                  isInvalid={errors.especialidad}
                />
                {errors.especialidad && <Form.Control.Feedback type="invalid">{errors.especialidad.message}</Form.Control.Feedback>}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} className='habeas'>
              <div>
                <p className="habeasData">
                  Autorizo la recolección, almacenamiento, uso, tratamiento, y transmisión internacional o a terceros de mis datos personales por parte de <b>COLGATE PALMOLIVE COMPAÑÍA con NIT 890.300.546-6</b>, con el fin de recibir información sobre sus productos, campañas publicitarias y promociones , hacer parte de sus actividades para profesionales de la salud y recibir información comercial especializada de la misma. Esto de acuerdo a lo establecido en la Ley 1581 de 2012 y el decreto 377 de 2013, y conforme a la política de datos personales disponible en <a href="https://www.colgatepalmolive.com.co/legal-privacy-policy" target="_blank" rel="noopener noreferrer"><i><u>https://www.colgatepalmolive.com.co/legal-privacy-policy</u></i></a>. Entendiendo que puedo solicitar la modificación o supresión de mis datos personales en cualquier momento.
                </p>
              </div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check {...register("autorizar", {
                  required: required,
                  maxLength: {
                    value: 15,
                    message: "Este campo tiene un límite de 15 caracteres"
                  }
                })}
                  type="checkbox" label="Si autorizo la recolección y uso de mis datos personales" />
              </Form.Group>
            </Col>

            <Col xs={12} className="my-3 center">
              <Button
                type="submit" className={autorizar ? "" : "noAutorizar"} disabled={!autorizar ? true : false}>
                Enviar
              </Button>
            </Col>
          </Row>

          {loading &&
            <div className="Overlay">
              <Spinner animation="border" variant="info" />
            </div>
          }

          <Toaster />
        </form>
        <div className="seccionLoginRegistro center">
          <p>Si usted está registrado,
            <Link className='linkSeccion' to={RoutersLinks.Login}> Iniciar Sesión</Link></p>
        </div>
      </div>
    </Container >
  );
};

export default Registrarse;