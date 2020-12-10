import React, {Component} from 'react';
import PostService from "../services/postsService/postService";
import Post from "../post/post";
import {
    BrowserRouter,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import FullInfoComment from "../coment/fullInfoComment";
import FullInfoPost from "../post/fullInfoPost";

class AllPosts extends Component {
    PostService = new PostService()
    state = {posts : []}
    async componentDidMount() {
        await this.PostService.posts().then(posts => this.setState({posts}))
    }

    render() {
        let {posts} = this.state
        let {match:{url}} = this.props

        return (

            <div>
                {
                    posts.map(post => <Post item={post} key={post.id}/>)
                }
                <div className={'all-user-info'}>

                    <Switch>
                        <Route path={`${url}/:id`}  render={() => <FullInfoPost/>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter (AllPosts);