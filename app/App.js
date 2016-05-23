import React, {Component} from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';

class ContactsAppContainer extends Component {
    constructor(){
        super();
        this.state={
            contacts: []
        };
    }

    conponentWillUnmount(){
        console.log('will unmount');
    }

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        fetch('./contacts.json')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({contacts: responseData});
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
        console.log("didmount");
    }

    render(){
        console.log("render");
        return (
            <ContactApp contacts={this.state.contacts} />
        );
    }
}


class ContactApp extends Component {
    constructor(){
        super();
        this.state={
            filterText: ''
        };
    }

    shouldComponentUpdate(){
        console.log('props should update');
        return true;
    }

    conponentWillReciveProps(){
        console.log('props will recive');
    }

    componentWillUpdate(){
        console.log('props will update');
    }

    componentDidUpdate(){
        console.log('props did update');
    }

    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm});
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    test={this.handleUserInput.bind(this)}
                />

                <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
            </div>
        );
    }
}

class SearchBar extends Component {
    handleChange(e) {
        this.props.test(e.target.value);
    }

    render(){
        return(
            <div>
                <input
                    type="search"
                    placeholder="search a contact"
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}

class ContactList extends Component {
    render(){
        let filterContacted = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );

        return(
            <div>
                <h1>Contact List</h1>
                <ol>
                    {filterContacted.map(
                        (contact) => <Contact
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            email={contact.email} />
                    )}
                </ol>
            </div>
        );
    }
}

class Contact extends Component {
    render(){
        return(
            <li>
                {this.props.name} - {this.props.email}
            </li>
        );
    }
}

render(<ContactsAppContainer/>, document.getElementById("root"));
