import React from 'react'

import Header from '../components/Header'

import '../assets/styles/userForm.css';

const UserForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.history.push('/');
    };

    //handleDropdown muestra la lista de opciones de sedes disponibles a elegir.
    const handleDropdown = () => {
        document.querySelector('.custom-select').classList.toggle('open');

        for (const option of document.querySelectorAll(".custom-option")) {
            option.addEventListener('click', function() {
                if (!this.classList.contains('selected')) {
                    this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
                }
            })
        }
    }

    return (
        <>
            <Header></Header>
            <section className='userForm_section'>
                <h2>Formulario de Usuarios</h2>
                <p>Este formulario simula el proceso que tiene que hacer un cliente para pedir una cita con un Odontólogo.</p>
                <div className='user_form_container'>
                    <form className='user_form' onSubmit={handleSubmit}>
                        <div className='user_form_inputGroup'>
                            <input className='input' type="text" placeholder='Tu Nombre' required/>
                            <label className='label'>
                                Tu Nombre
                            </label>
                        </div>
                        <div className='user_form_inputGroup'>
                            <input className='input' type="text" placeholder='Tus Apellidos' required/>
                            <label className='label'>
                                Tus Apellidos
                            </label>
                        </div>
                        <div className='user_form_inputGroup'>
                            <input className='input' type="number" placeholder='Tu Número de Teléfono' max='999999999' required/>
                            <label className='label'>
                                Tu Número de Teléfono
                            </label>
                        </div>
                        <div className='user_form_inputGroup'>
                            <input className='input' type="email" placeholder='Tu Correo Electrónico' required/>
                            <label className='label'>
                                Tu Correo Electrónico
                            </label>
                            <label className='warn_label'>
                                Debes digitar un Email válido.
                            </label>
                        </div>
                        <div className='user_form_inputGroup'>
                            <input className='input' type="date" placeholder='Fecha de Agendamiento'/>
                            <label className='label'>
                                Fecha de Agendamiento
                            </label>
                        </div>
                        <div class="user_form_radioGroup">
                            <p>Elige entre cualquiera de nuestros Odontólogos disponibles.</p>
                            <input id="dentist1" type="radio" name="dentist" value="dentistId1" />
                            <label class="form_radioGroup_label dentist1" for="dentist1"></label>

                            <input id="dentist2" type="radio" name="dentist" value="dentistId2" />
                            <label class="form_radioGroup_label dentist2" for="dentist2"></label>

                            <input id="dentist3" type="radio" name="dentist" value="dentistId3" />
                            <label class="form_radioGroup_label dentist3" for="dentist3"></label>
                        </div>
                        <div className='user_form_selectGroup' onClick={handleDropdown}>
                            <p>Elige cualquiera de las sedes que tenemos disponibles.</p>
                            <div class="custom-select">
                            <div class="custom-select__trigger"><span>Sede</span>
                                <div class="arrow"></div>
                            </div>
                            <div class="custom-options">
                                <span class="custom-option selected" data-value="tesla">Sede 1</span>
                                <span class="custom-option" data-value="volvo">Sede 2</span>
                                <span class="custom-option" data-value="mercedes">Sede 3</span>
                            </div>
                        </div>
                        </div>
                        <button type='submit' className='userForm_submitBtn'>Agendar</button>
                    </form>
                    </div>
            </section>
        </>
    )
}

export default UserForm;
