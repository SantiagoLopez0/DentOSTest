import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header'
import '../assets/styles/home.css';
import '../assets/styles/media.css';

const Home = () => (
    <section className='home_section'>
        <Header></Header>
        <h1>Prueba Técnica</h1>
        <p>Esta interfaz tiene como objetivo mostrar las dos tareas que pidieron realizar. Cada botón lleva a una de las dos interfaz que cree con React.</p>
        <div className='home_section_options'>
            <Link to='/login'>Login</Link>
            <Link to='/form'>Formulario de Usuarios</Link>

        </div>
    </section>
)

export default Home;

