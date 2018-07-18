import React, { Component } from "react";
import ChampionList from '../../components/championList';
import '../../../scss/pages/champions.scss';

class ChampionsPage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section class="champions_page">
                <h2 className="text-center">Champions</h2>
                <ChampionList />
            </section>
        );
    }
}

export default ChampionsPage