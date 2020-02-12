import React from 'react'
import { Link } from 'react-router-dom'

class PeopleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(details => this.setState({ details }))
    }

    render() {
        return (
            <>
                <section className="container">
                    <div className="row justify-content-center mt-5 text-success">

                    </div>
                    <div className="card text-center">
                        <div className="card-header shadow">
                            <h3>{this.state.details.name}</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-title">Age: {this.state.details.age}</p>
                            <p className="card-text">Gender: {this.state.details.gender}</p>
                            <p className="card-text">Eye Color: {this.state.details.eye_color}</p>
                            <p className="card-text">Hair Color: {this.state.details.hair_color}</p>
                            <Link to="/ViewPeople"><button className="btn btn-outline-warning mr-3 shadow" type="button">View Other People</button></Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default PeopleDetail;