import React from "react";
import '../styles/SecondarySection.css';
function SecondarySection () {
    return (
        <div className="container-section">
            <div className="item-container">
                <h2>Año De Estreno</h2>
                <ul className="list-date">
                    <li>
                        <a href="#" className="date">2022</a>
                    </li>
                </ul>
            </div>
            <div className="item-container">
                <h3>Generos</h3>
            </div>
        </div>
    );
}
export default SecondarySection;