import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import employees from "../employees.json";
let i;

class Home extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        console.log(employees);
        this.giveMe4()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    giveMe4() {
        for (i = 0; i < 4; i++) {
            API.getEmployee()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
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