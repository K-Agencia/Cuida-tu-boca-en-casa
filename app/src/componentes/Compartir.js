import React from 'react';
import { EmailShareButton, FacebookShareButton, TelegramShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, FacebookIcon, TelegramIcon, WhatsappIcon } from "react-share";
import { MdFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../css/Compartir.css';
import { urlApi } from '../constantes/RoutersLinks';

const Compartir = ({ urlVideo, nameApiVideo, nameDescarga }) => {

   let titulo = "Quiero compartirte este video informativo 🎥";
   let text = "¡Hola! 👋 Quiero compartirte este video informativo 🎥 que puede ser de gran utilidad para ti. 😃";

   return (
      <div className='Compartir'>
         <Link to={`${urlApi}/descargar/${nameApiVideo}`} target="_blank" download>
            <button className='classDescarga'>
               <MdFileDownload />
            </button>
         </Link>

         <EmailShareButton url={urlVideo} subject={titulo} body={text} separator={"\n"}>
            <EmailIcon size={50} round={true} />
         </EmailShareButton>

         <FacebookShareButton url={urlVideo} quote={text}>
            <FacebookIcon size={50} round={true} />
         </FacebookShareButton>

         {/* <FacebookMessengerShareButton url={urlVideo}>
            <FacebookMessengerIcon size={50} round={true} />
         </FacebookMessengerShareButton> */}

         <TelegramShareButton url={urlVideo} title={text}>
            <TelegramIcon size={50} round={true} />
         </TelegramShareButton>

         <WhatsappShareButton url={urlVideo} title={text} separator={"\n"}>
            <WhatsappIcon size={50} round={true} />
         </WhatsappShareButton>
      </div>
   );
};

export default Compartir;