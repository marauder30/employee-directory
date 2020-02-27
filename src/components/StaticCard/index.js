import React from "react";
import "./style.css";

function StaticCard(props) {
    return (
        <div
          className="card">
              <div class="row justify-content-center">
                <div class="col-sm-2">
                    Image {props.image}
                </div>
                <div class="col-sm-2">
                    Name {props.name}
                </div>
                <div class="col-sm-2">
                    Phone {props.phone}
                </div>
                <div class="col-sm-3">
                    Email {props.email}
                </div>
                <div class="col-sm-2">
                    DOB {props.birthdate}
                </div>                
              </div>
          </div>
    );
}

export default StaticCard;