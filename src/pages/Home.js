import React, { Component } from "react";
import SearchForm from "../components/SearchForm";

class Home extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    };

    componentDidMount() {
        console.log("Success!");
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>The employinest directoruh there's</h1>
                <SearchForm />
            </div>
        );
    }
}

export default Home;