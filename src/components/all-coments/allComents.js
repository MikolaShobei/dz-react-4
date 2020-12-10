import React, {Component} from 'react';
import CommentsService from "../services/coments-service/comentsService";
import Comment from "../coment/coment";
import {withRouter,Switch, Route} from "react-router-dom";
import FullInfoComment from "../coment/fullInfoComment";

class AllComments extends Component {
    CommentsService = new CommentsService()
    state = {comments : []}
    async componentDidMount() {
        await this.CommentsService.comments().then(comments => this.setState({comments}))
    }

    render() {
        let {comments} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                    {console.log(comments)}

                {
                    comments.map(comment => <Comment item={comment} key={comment.id}/>)
                }
                <div className={'all-user-info'}>
                    <Switch>
                        <Route path={`${url}/:id`}  render={() => <FullInfoComment/>} />
                    </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter (AllComments);