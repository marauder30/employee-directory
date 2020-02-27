import React from "react";
import "./style.css";

const style = {
    padding: 90,
    fontSize: 100,
    color: "orangered"
}

function Header(props) {
    return (
        <div className="hero text-center" style={{ backgroundImage: "url(https://placekitten.com/1920/400)" }}>
            <h1 style={style}>EMPLOYEE DIRECTORY</h1>
        </div>
    );
}

export default Header;