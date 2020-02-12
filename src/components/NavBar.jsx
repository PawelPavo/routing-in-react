import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light sticky-top justify-content-center mb-5">
                <form className="form-inline">
                    <Link to="/"><button className="btn btn-outline-success mr-3" type="button">Home</button></Link>
                    <Link to="/ViewMovies"><button className="btn btn-outline-success mr-3" type="button">View Movies</button></Link>
                    <Link to="/ViewPeople"><button className="btn btn-outline-success mr-3" type="button">View People</button></Link>
                    <Link to="/ViewHipHop"><button className="btn btn-outline-success mr-3" type="button">View HipHop</button></Link>
                </form>
            </nav >
        </>
    )

}

export default NavBar;