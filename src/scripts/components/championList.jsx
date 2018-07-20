import React, { Component } from 'react';
import { championsFetch } from "../actions/championsFetch";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Champion from "./champion";

class ChampionList extends Component {
    componentDidMount() {
        window.props = this.props;

        this.props.championsFetch();
    }

    render() {
        var arrChamps = Object.values(this.props.champions);
        
        if(arrChamps.length > 0)
            return (
                <div className="champions_list">
                    {
                            arrChamps.map((data, index) => {
                                return <Champion {...data} />
                            })
                        }
                </div>
        );
        return (<div></div>)
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