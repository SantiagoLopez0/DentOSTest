import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Header from '../components/Header'

import '../assets/styles/login.css';

const Login = (props) => {
    const [form, setValues] = useState({
        email: '',
    });
    // handleInput guarda los datos tipeados de cualquier input en el estado para manejar la información más adelante.
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    //Al intentar iniciar sesión handleSubmit muestra una ventana emergente con los datos ingresados y simula un login hacia la ventana de Home.
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Usted intento ingresar con los siguientes datos: \nEmail: ${form.email} \n Contraseña: ${form.password}`);
        props.history.push('/');
    };
    return (
        <section className='login'>
            <Header></Header>
            <section className='login_container'>
                <h2>Iniciar Sesión</h2>
                <form className='login_container_form' onSubmit={handleSubmit}>
                    <div className='login_form_inputGroup'>
                        <input
                            name='email'
                            id ='login_form_emailInput'
                            className='input'
                            type="email"
                            placeholder='Tu Correo Electrónico'
                            required
                            onChange={handleInput}
                        />
                        <label htmlFor="login_form_emailInput" className='label'>
                            Tu Correo Electrónico
                        </label>
                        <label className='warn_label'>
                            Debes digitar un Email válido.
                        </label>
                    </div>
                    <div className='login_form_inputGroup'>
                        <input
                            name='password'
                            id ='login_form_emailPassword'
                            className='input'
                            type="password"
                            placeholder='Tu Contraseña'
                            required
                            onChange={handleInput}
                        />
                        <label htmlFor="login_form_emailPassword" className='label'>
                            Tu Contraseña
                        </label>
                    </div>
                    <button className='login_form_submitBtn' type='submit'>CONTINUAR</button>
                    <div className='login_container_options'>
                        <Link to='/'>Olvidé mi contraseña</Link>
                        <Link to='/'>Regístrate</Link>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Login;