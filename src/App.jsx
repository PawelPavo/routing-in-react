import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ViewMovies from './components/ViewMovies'
import ViewPeople from './components/ViewPeople'
import NavBar from './components/NavBar'
import MovieDetail from './components/MovieDetail'
import ViewHipHop from './components/ViewHipHop'
import PeopleDetail from './components/PeopleDetail'


class App extends React.Component {

    render() {
        return (
            <>

                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/ViewMovies" component={ViewMovies} />
                        <Route exact path="/ViewPeople" component={ViewPeople} />
                        <Route exact path="/MovieDetail/:id" component={MovieDetail} />
                        <Route exact path="/PeopleDetail/:id" component={PeopleDetail} />
                        <Route exact path="/ViewHipHop" component={ViewHipHop} />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App