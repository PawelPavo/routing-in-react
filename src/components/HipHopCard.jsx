import React from 'react'
import { FaInfoCircle, FaAmazon } from 'react-icons/fa';


const HipHopCard = props => {
    return (
        <>
            <div className="card mb-3 w-75">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img src={props.image} className="card-img" alt="..." />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-title">{props.title}</h4>
                            <p className="card-text"><FaInfoCircle /> {props.artist}</p>
                            <div className="card-footer bg-transparent text-center mt-5">
                                <button type="button" className="btn btn-warning btn-lg text-center shadow"><a target="_blank" rel="noopener noreferrer" href={props.url}> Buy on < FaAmazon /></a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HipHopCard