import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setPosts } from '../redux-files/posts/posts.actions'; // regular redux format insted of this setPostsStartAsync was used for thunk  

import { setPostsStartAsync } from '../redux-files/posts/posts.actions';


class ReduxThunkExample extends Component {


    state = {
        todoList: null,
		isLoading: true
    }


    // normal redux format functions starts 

    // fetchPosts = async () => {
	// 	const postsData = await fetch('https://jsonplaceholder.typicode.com/posts');
	// 	const posts = (await postsData.json()).slice(0,10);
	// 	return posts;
	// }

	// async componentDidMount() {
	// 	const { setPosts } = this.props;
	// 	const posts = await this.fetchPosts();
	// 	setPosts(posts);
	// 	this.setState({
	// 		isLoading : false
	// 	})
    // }
    
    // normal redux format functions ends 
    
    
    // redux thunk starts 

    componentDidMount()
    {
        const { setPostsStartAsync } = this.props;
        // console.log(setPostsStartAsync);
        setPostsStartAsync();
    }

    
    // redux thunk ends 

    render() {
        const { posts } = this.props;
        console.log(posts);
        return (
            <div className="container">
                {
                    posts && posts.map( item => {
                        return (
                            <div key={item.id} className="border mb-4 mt-4 p-2">
                                <p>{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}



const mapStateToProps = ({postsReducer}) => {
    // console.log(postsReducer);
    return {
        posts : postsReducer.posts,
        isFetching : postsReducer.isFetching
    }
}

const mapDispatchToProps = dispatch => {
	return {
        // setPosts: posts => dispatch(setPosts(posts)), // normal redux format 
        setPostsStartAsync : () => dispatch(setPostsStartAsync())
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(ReduxThunkExample);
