import React, { Component } from "react";
import ChampionList from '../../components/championList';
import Search from '../../components/search';
import { fetch, filter } from "../../actions/champions";
import { connect } from "react-redux";
import Loader from '../../components/loader';

import '../../../scss/pages/champions.scss';

class ChampionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            champions: [],
            loading: false
        };
    }

    componentDidMount() {
        this.props.fetch();
    }

    onChange(evt) {
        let query = evt.currentTarget.value
        this.props.filter(query);
    }

    render() {
        return (
            <section className="champions_page">
                <h2 className="text-center">Champions</h2>
                <Search placeholder="champion name starts with..." onChange={this.onChange.bind(this)} />
                <ChampionList champions={this.props.champions} hidden={this.props.loading} />
                <Loader loading={this.props.loading} />
            </section>
        );
    }
}

function mapStateToProps(state) {
    let { champions, loading } = state.champions

    return {
        champions,
        loading
    }
}

const mapDispatchToProps = {
    fetch: fetch,
    filter: filter
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsPage)