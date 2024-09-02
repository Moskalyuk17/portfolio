import React from 'react';
import { NavLink } from 'react-router-dom';

class Aside extends React.Component {
    render() {
        return (
            <div className='aside'>
                <div className='aside_info'>
                    <NavLink to='/about' className='about'>ABOUT</NavLink>

                    <NavLink to='/project' className='project'>ROJECT</NavLink>

                    <NavLink to='/contacts' className='contacts'> CONTACTS </NavLink>
                </div>
            </div>
        );
    }
}

export default Aside;
