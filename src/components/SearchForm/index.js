import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="name">Employee Name:</label>
                <input
                  value={props.search}
                  onChange={props.handleInputChange}
                  name="name"
                  list="employees"
                  type="text"
                  className="form-control"
                  placeholder="Type an employee name to begin"
                  id="name"
                />
                {/* <datalist id="employees">
                    {props.employees.map(name => (
                        <option value={name} key={name} />
                    ))}
                </datalist> */}
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;