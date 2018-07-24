import React, { Component } from "react";
import ChampionList from '../../components/championList';
import Search from '../../components/search';
import { fetch, filter } from "../../actions/champions";
import { connect } from "react-redux";

import '../../../scss/pages/champions.scss';

class ChampionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            champions: []
        }
    }

    componentDidMount() {
        this.props.fetch();
    }

    onChange(evt) {
        let query = evt.currentTarget.value

        this.props.filterFn(query);
    }

    render() {
        return (
            <section className="champions_page">
                <h2 className="text-center">Champions</h2>
                <Search placeholder="champion name starts with..." onChange={this.onChange.bind(this)} />
                <ChampionList champions={this.props.champions} />
            </section>
        );
    }
}

function mapStateToProps(state) {
    let { champions } = state.champions

    return {
        champions
    }
}

const mapDispatchToProps = {
    fetch: fetch,
    filterFn: filter
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsPage)