import React from 'react';
import { Route, Routes } from "react-router-dom"

import logo from '../assect/people.png';
import Aside from './Aside';

export function Main() {
    return (
        <div className='main'>
            <div className='main_container'>
                <div className='circle'></div>
                <figure>
                    <img className='logo' alt='man' src={logo} />
                </figure>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/aside' element={<Aside />} />
                </Routes>
            </div>
        </div>
    );
}


export default Main;
