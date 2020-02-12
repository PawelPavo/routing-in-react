import React from 'react'
import MovieCard from './MovieCard'

class ViewMovies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(movies =>
                this.setState({ movies })
            )
    }


    render() {
        return (
            <>
                <section className='row justify-content-center my-3'>
                    <div className="col-sm-6">
                        {this.state.movies.map(info => (
                            <MovieCard key={info.id} title={info.title} description={info.description} id={info.id}/>
                        ))}
                    </div>
                </section>
            </>
        )
    }
}

export default ViewMovies;