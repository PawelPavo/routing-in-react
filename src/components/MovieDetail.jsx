import React from 'react'
import { Link } from 'react-router-dom'

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
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
              <h3>{this.state.details.title}</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">Director: {this.state.details.director}</h5>
              <p className="card-text">Producer: {this.state.details.producer}</p>
              <p className="card-text">Release Date: {this.state.details.release_date}</p>
              <Link to="/ViewMovies"><button className="btn btn-outline-warning mr-3 shadow" type="button">View Other Movies</button></Link>
            </div>
            <div className="card-footer text-muted shadow">Rating: {this.state.details.rt_score}</div>
          </div>
        </section>
      </>
    );
  }
}

export default MovieDetail;