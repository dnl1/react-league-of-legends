import React, { Component } from 'react';
import { championsFetch } from "../actions/championsFetch";
import { connect } from "react-redux";
import Champion from "./champion";

class ChampionList extends Component {
    componentDidMount() {
        this.props.championsFetch();
    }

    render() {
        let { champions } = this.props;

        champions = Object.values(champions);

        return (
            <div className="champions_list">
            {
                champions.map((data, index) => {
                    return <Champion {...data} />
                })
            }
            </div>)
     }
}

function mapStateToProps(state) {
    return {
        ...state
    }
  }

const mapDispatchToProps = {
    championsFetch: championsFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionList)