import React, { Component } from 'react';
import { championsFetch } from "../actions/championsFetch";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Champion from "./champion";

class ChampionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            champions: []
        };
    }

    componentDidMount() {
        console.log(this.state);

        this.props.championsFetch().then((response) => {
            let data = response.data.data;
            var keys = Object.keys(data);
            let champions = [];

            keys.forEach(element => {
                champions.push(data[element]);
            });

            this.setState({
                champions: champions
            });

        }).catch((error) => {
            console.log('error', error);
        })
    }

    render() {
        return (
            <div className="champions_list">
                {
                    this.state.champions.map((data, index) => {
                        return <Champion {...data} />
                    })
                }
            </div>
        );
    }
}

ChampionList.propTypes = {
    championsFetch: PropTypes.func.isRequired,
}

export default connect(null, { championsFetch })(ChampionList)