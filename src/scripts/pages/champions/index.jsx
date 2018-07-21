import React, { Component } from "react";
import ChampionList from '../../components/championList';
import Search from '../../components/search';
import '../../../scss/pages/champions.scss';

class ChampionsPage extends Component {
    onChange(evt){
        const value = evt.currentTarget.value;
        console.log('value', value);
    }
    render() {
        return (
            <section className="champions_page">
                <h2 className="text-center">Champions</h2>
                <Search placeholder="champion name starts with..." onChange={(evt) => this.onChange(evt) }/>
                <ChampionList />
            </section>
        );
    }
}

export default ChampionsPage