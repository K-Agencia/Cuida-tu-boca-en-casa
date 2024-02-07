import React from 'react';
import { Card, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Videos, inicioVideo } from '../constantes/Videos';
import Compartir from '../componentes/Compartir';
import '../css/Menu.css';

const Menu = () => {

   return (
      <div className='Menu'>
         <Container className='body'>
            <h1>Cuida Tu Boca Mientras Estás En Casa</h1>
            <hr />
            <div className='imiCard' >
               <h3>{inicioVideo.nombre}</h3>
               <ReactPlayer
                  height={"100%"}
                  url={inicioVideo.url}
                  config={{
                     vimeo: {
                        controls: true,
                        playsinline: false,
                        quality: 'auto'
                     }
                  }}
                  controls
                  className="reproductorVideo"
               />
            </div>
            {Videos.map((item, index) => (
               <Card body key={index}>
                  <h3>{item.nombre}</h3>
                  <ReactPlayer
                     height={"100%"}
                     url={item.url}
                     config={{
                        vimeo: {
                           controls: true,
                           playsinline: false,
                           quality: 'auto'
                        }
                     }}
                     controls
                     className="reproductorVideo"
                  />
                  <Compartir urlVideo={item.url} nameApiVideo={item.nameDescarga} nameDescarga={item.nameVideo} />
               </Card>
            ))}
         </Container>
      </div>
   );
};

export default Menu;