import React from 'react'
import { Link } from 'react-router-dom';

import '../assets/styles/components/header.css'

const Header = () => (
    <>
        <div className='header'>
            <Link to='/'>DentOS</Link>
        </div>
    </>
)

export default Header;
