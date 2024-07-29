import React from 'react';


class Image extends React.Component {
    render () {
        return (
            <img src={this.props.image} className="logo_image" />
          );
    }
}

export default Image;
