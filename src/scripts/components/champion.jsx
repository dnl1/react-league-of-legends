import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Champion extends Component {
    render() {
        return (
            <div className="champion">
                <img className="champion__image" alt={this.props.name} src={`//ddragon.leagueoflegends.com/cdn/8.13.1/img/champion/${this.props.chave.replace('\'','').replace(' ','')}.png`} width="84"/>
                <section>
                    <p>{this.props.name}</p>
                </section>
            </div>
        );
    }
}

Champion.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    chave: PropTypes.string,
    title: PropTypes.string,
}

export default Champion;