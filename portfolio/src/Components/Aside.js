import React from 'react';
import About from './About';

class Aside extends React.Component {
    render () {
        return (
            <div className='aside'>
                <div className='aside_info'>
                    <a href='./About' className='about'>ABOUT</a>
                    <a href='#' className='project'>PROJECT</a>
                    <a href='#' className='contacts'>CONTACTS</a>
                </div>
            </div>
          );
    }
}

export default Aside;
