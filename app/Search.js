import React, {Component} from 'react';

class Search extends Component{
    constructor() {
        super();
        this.state={
            searchTerm: "React"
        };
    }

    input_search(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    render() {
        return(
            <div className="search">
                <input type="search" onChange={this.input_search.bind(this)} value={this.state.searchTerm}/>
            </div>
        );
    }
}

export default Search
