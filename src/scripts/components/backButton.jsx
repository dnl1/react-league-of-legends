import React from 'react';
import '../../scss/components/backButton.scss';

class BackButton extends React.Component {
    render() {
        return (
            <button type="button" name="back" className="back-button" onClick={this.props.onClick}>
                <span className="back-button__icon"></span>
            </button>
        );
    }
}

export default BackButton;
