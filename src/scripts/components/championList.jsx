import React, { Component } from 'react';
import Champion from "./champion";

class ChampionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            champions: [],
            ...props
        }
    }

    render() {
        let { champions } = this.props;
        return (
            <div className="champions_list">
                {
                    champions.map((data) => {
                        return <Champion {...data} />
                    })
                }
            </div>)
    }
}

export default ChampionList;