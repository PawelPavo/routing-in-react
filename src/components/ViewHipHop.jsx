import React from 'react'
import HipHopcard from './HipHopCard'


class ViewHipHop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiphop: []
        }
    }
    componentDidMount() {
        fetch('https://student-fun-api.herokuapp.com/api/hiphop')
            .then(res => res.json())
            .then(hiphop =>  this.setState({ hiphop }))
    }

    render() {
        return (
            <>
                <section className="row justify-content-center">
                        {this.state.hiphop.map(info => (
                            <HipHopcard key={info.id} title={info.title} artist={info.artist} url={info.url} image={info.image} thumbNail={info.thumbnail_image}/>
                        ))}
                </section>
            </>
        );
    }
}

export default ViewHipHop;
