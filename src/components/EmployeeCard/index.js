import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div
          className="card">
              <div className="row justify-content-center">
                <div className="col-sm-2">
                    Image {props.image}
                </div>
                <div className="col-sm-2">
                    Name {props.name}
                </div>
                <div className="col-sm-2">
                    Phone {props.phone}
                </div>
                <div className="col-sm-3">
                    Email {props.email}
                </div>
                <div className="col-sm-2">
                    DOB {props.birthdate}
                </div>                
              </div>
          </div>
    );
}

export default EmployeeCard;