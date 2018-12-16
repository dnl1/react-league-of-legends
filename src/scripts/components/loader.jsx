import React from 'react';
import image from '../../images/lol-loader.png'
import '../../scss/components/loader.scss';

class Loader extends React.Component {
    render() {
        return (
            this.props.loading ?
                <div className="loading">
                    <img src={image} alt="loading data" width="250" />
                </div> : <span></span>

        );
    }
}

export default Loader;
