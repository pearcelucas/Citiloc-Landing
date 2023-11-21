import React from 'react';
import { Subtitulo } from '../pages/styles';

export const Mapa = () => {
  return (
    <div>
      <Subtitulo>Localização:</Subtitulo>
      <iframe
        width="300vw"
        height="225vw"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.363476501991!2d-38.49113082541026!3d-3.7307022431830474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748790f2d8965%3A0xa422a089154d0f69!2sR.%20Delmiro%20Gouv%C3%AAia%2C%20420%20-%20Varjota%2C%20Fortaleza%20-%20CE%2C%2060175-090!5e0!3m2!1spt-BR!2sbr!4v1697048408063!5m2!1spt-BR!2sbr"
        allowFullScreen
        title="Localização no Google Maps"
        backgroundColor="transparent"
        
        
        />
    </div>
  );
}

