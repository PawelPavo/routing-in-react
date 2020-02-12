import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const PeopleCard = props => {
    return (
        <>
            <div className="card border-success mb-3 shadow text-center">
                <div className="card-header text-center text-success"><FaUserAlt /></div>
                <ul className="list-group list-group-flush shadow text-success">
                    <li className="list-group-item">Name: {props.name}</li>
                    <li className="list-group-item text-decoration-none"><a target="_blank" rel="noopener noreferrer" href={"http://ghibliapi.herokuapp.com/people/" + props.id}>Get JSON</a></li>
                    <button type="button" className="btn btn-outline-success"><Link to={`PeopleDetail/${props.id}`}>More Info</Link> </button>

                </ul>
            </div>

        </>
    )
}
export default PeopleCard