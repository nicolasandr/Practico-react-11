import React from 'react';
import Formulario from './Formulario';
import '../App.css';

const Titulo = () => {
    return (
        <div>
            <h1 className='display-3 text-center bg-titulo'>Noticias</h1>
            <Formulario></Formulario>
        </div>
    );
};

export default Titulo;