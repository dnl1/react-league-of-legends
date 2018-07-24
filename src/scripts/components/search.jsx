import React from 'react';
import '../../scss/components/search.scss';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    onChange(evt) {
        const value = evt.currentTarget.value;
        this.setState({ search: value });

        this.props.onChange(evt);
    }

    render() {
        return (
            <input ref="search" className="search" name="search" type="text" value={this.state.search} placeholder={this.props.placeholder} onChange={this.onChange.bind(this)} />
        );
    }

}

export default Search;