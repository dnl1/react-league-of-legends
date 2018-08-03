import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Champion extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionLeave={true}
                transitionLeaveTimeout={500}>

                <div className="champion">
                    <img className="champion__image" alt={this.props.name} src={`//ddragon.leagueoflegends.com/cdn/8.13.1/img/champion/${this.props.chave.replace('\'','').replace(' ','')}.png`} width="84"/>
                    <section>
                        <p>{this.props.name}</p>
                    </section>
                </div>
            </ReactCSSTransitionGroup>
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
