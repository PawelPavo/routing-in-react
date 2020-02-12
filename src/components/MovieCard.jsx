import React from 'react'
import { FaFilm, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MovieCard = props => {
    return (
        <>
            <div className="card border-primary mb-3 text-success">
                <div className="card-header shadow text-center"><FaFilm /></div>
                <div className="card-body shadow text-success">
                    <h4> {props.title}</h4>
                    <p className="card-text text-secondary"><FaInfoCircle /> {props.description}</p>
                    <Link to={`MovieDetail/${props.id}`} >Get details</Link>
                </div>
            </div>
        </>
    )
}
export default MovieCard