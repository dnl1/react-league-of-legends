import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };
    }

    render() {
        return (
            <input ref="search" className="search" type="text" value={this.state.search} placeholder={this.props.placeholder} onChange={this.props.onChange.bind(this)} />
        );
    }

}

export default Search;