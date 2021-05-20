import React from 'react'
import { Link } from 'react-router-dom'

function HeadBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Counter</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/employee" className="nav-link">Employee</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default HeadBar
