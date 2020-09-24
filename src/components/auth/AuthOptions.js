import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function AuthOptions() {
    const history = useHistory();

    const login = () => history.push("/login");
    const register = () => history.push("/register");
    return (
        <>
               <ul className="navbar-nav">
                    <li className="nav-item">
                    <button type="button" onClick={login} className="btn btn-outline-dark nav-link">Login</button>
                    </li>
                    <li className="nav-item">
                    <button type="button" onClick={register} className="btn btn-outline-dark nav-link">Register</button>
                    </li>

                </ul>
        </>
    )
}
