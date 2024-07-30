import React from 'react';
import logo from '../assect/image_2-F6P6gAN7U-transformed.png';

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div className='header_container'>
                    <img className='logo' src={logo} />
                    <span className='nick_name'>ANONYMS</span>
                    <div className='name_specialist'>
                        <h3 className='firstname'>ABHIRAJ</h3>
                        <h2 className='lastname'>ADHIKARY</h2>
                    </div>
                </div>
            </div>
          );
    }
}

export default Header;
