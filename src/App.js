import React, {Component} from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./components/all-users/allUsers";
import AllComments from "./components/all-coments/allComents";
import AllPosts from "./components/all-posts/allPosts";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>users</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>coments</Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>posts</Link>
                    </div>
                    <div className={'all-route'}>
                        <Switch>
                            <Route path={'/users'}  render={props => {
                                return <AllUsers/>
                            }}/>
                            <Route path={'/comments'}> <AllComments/> </Route>
                            <Route path={'/posts'}  render={props => {
                                return <AllPosts/>
                            }}/>
                        </Switch>
                    </div>
                </div>

            </Router>
        );
    }
}

export default App;