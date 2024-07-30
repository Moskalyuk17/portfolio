import React from 'react';
import logo from '../assect/people.png';

class Main extends React.Component {
    render () {
        return (
            <div className='main'>
                <img className='logo' src={logo} />
            </div>
          );
    }
}

export default Main;
