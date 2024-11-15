import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <Link className="btn btn-dark" to="/books">Kitoblar</Link>
            </li>
        </ul>
    )
}

export default Dashboard;