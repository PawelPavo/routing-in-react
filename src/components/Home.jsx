import React from 'react'



class Home extends React.Component {

    state = { img: "https://ghibliapi.herokuapp.com/images/logo.svg" }

    render() {
        return (
            <>
                <div style={styles}>
                <img src={this.state.img}
                    onMouseEnter={() => {
                        this.setState({ img: "https://i.ya-webdesign.com/images/fox-shine-png-2.png" })
                    }}
                    onMouseOut={() => {
                        this.setState({ img: "https://ghibliapi.herokuapp.com/images/logo.svg" })
                    }}
                />
            </div>
            </>
        )
    }
}

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

export default Home