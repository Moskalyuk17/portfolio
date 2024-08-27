import React from 'react';
import logo from '../assect/people.png';
import Aside from './Aside';

class Main extends React.Component {
    render () {
        return (
            <div className='main'>
                <div className='main_container'>
                    <div className='circle'></div>
                    <figure>
                        <img className='logo' alt='man' src={logo} />
                    </figure>
                    <Aside />
                </div>
            </div>
          );
    }
}

export default Main;
