import React, {Component} from 'react';
import User from "../user/user";
import UsersService from "../services/users-service/usersService";
import {Route, Switch, withRouter} from "react-router-dom";

class AllUsers extends Component {
    UserService = new UsersService()
    state = {users: []}




    render() {

        console.log(this.props)
        let {match : {url}} = this.props
        let {users} =this.state
        return (
            <div>
                {
                    users.map(user => <User item={user} key={user.id} />)

                }
                <div className={'all-user-info'}>
                    <Switch>
                        <Route path={`${url}/:id`}  render={() => '<FullInfoIfUser/>'} />

                    </Switch>
                </div>
            </div>
        );
    }

    async componentDidMount() {
        let users = await this.UserService.ussers()
        this.setState({users})
    }
}

export default withRouter(AllUsers);