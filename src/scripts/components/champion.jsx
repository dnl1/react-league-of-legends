import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom'
import routeHelper from '../helpers/routeHelper';

class Champion extends Component {
    onImageLoad() {

    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionLeave={true}
                transitionLeaveTimeout={500}
                transitionEnter={true}
                transitionEnterTimeout={500}
            >

                <Link to={routeHelper.resolvePath(`/champions/${this.props.name.replace('.', '').toLowerCase()}`)}>
                    <div className="champion">
                        <img className="champion__image" onLoad={this.onImageLoad.bind(this)} alt={this.props.name} src={`//ddragon.leagueoflegends.com/cdn/8.15.1/img/champion/${this.props.chave.replace('\'', '').replace(' ', '')}.png`} width="84" />
                        <section>
                            <p>{this.props.name}</p>
                        </section>
                    </div>
                </Link>
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
