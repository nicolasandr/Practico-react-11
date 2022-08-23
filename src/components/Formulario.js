import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import ListaNoticias from './ListaNoticias';

const options = [
    { value: 'business', label: 'business' },
    { value: 'entertainment', label: 'entertainment' },
    { value: 'general', label: 'general' },
    { value: 'health', label: 'health' },
    { value: 'science', label: 'science' },
    { value: 'sports', label: 'sports' },
    { value: 'technology', label: 'technology' },
];

const Formulario = () => {
    const [arregloNoticias, setArregloNoticias] = useState([]);
    const [categoria, setvalueCategorias] = useState('');

    const onDropdownChange = (e) => {
        setvalueCategorias(e.value);
    };
    useEffect(() => {
        consultarAPI();
    }, [categoria]);

    const consultarAPI = async () => {
        const respuesta = await fetch(`
         https://newsapi.org/v2/top-headlines/sources?apiKey=6624334bbfc14247b52fb14cfcf7fcee&category=${categoria}`);
        const dato = await respuesta.json();
        setArregloNoticias(dato.sources); 
    };

    return (
        <div>
            <div className="container py-3">
                <div className="row text-center border py-4">
                    <div className="col-12 col-md-6">
                        <h5>Buscar por categoria:</h5>
                    </div>
                    <div className="col-12 col-md-6">
                        <Select
                            options={options}
                            onChange={onDropdownChange}
                        ></Select>
                    </div>
                </div>
                <ListaNoticias
                    arregloNoticias={arregloNoticias}
                ></ListaNoticias>
            </div>
        </div>
    );
};

export default Formulario;
