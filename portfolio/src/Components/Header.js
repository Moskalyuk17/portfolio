import React from 'react';
import logo from '../img/image_2-F6P6gAN7U-transformed.png';

class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <div className="header_container">
                    <img className='logo' src={logo} />
                    <span>ANONYMS</span>
                    <span>ABHIRAJ ADHIKARY</span>
                </div>
            </div>
          );
    }
}

export default Header;
