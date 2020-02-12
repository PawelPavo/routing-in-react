import React from 'react'
import PeopleCard from './PeopleCard'

class ViewPeople extends React.Component {
    constructor() {
        super();
        this.state = {
            people: [],
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people =>
                this.setState({ people })
            )
    }

    render() {
        return (
            <>
                <section className='row justify-content-center'>
                    <div className="col-sm-6">
                        {this.state.people.map(info => (
                            <PeopleCard key={info.id} name={info.name} age={info.age} gender={info.gender} id={info.id} />
                        ))}
                    </div>
                </section>
            </>
        )
    }
}

export default ViewPeople;