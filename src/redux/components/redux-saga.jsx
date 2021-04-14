import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setPosts } from '../redux-files/posts/posts.actions';
import { setPostsStart } from '../redux-files/posts/posts.actions';



class ReduxSagaExample extends Component {


    state = {
        todoList: null,
    }

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


    componentDidMount()
    {
        const { setPosts } = this.props;
        setPosts();
    }




    render() {
        const { posts, isFetching } = this.props;
        return (
            <div className="container">
                {
                    isFetching 
                    ?  
                    <p>Loading... </p> 
                    :
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
    return {
        posts : postsReducer.posts,
        isFetching : postsReducer.isFetching
    }
}

const mapDispatchToProps = dispatch => {
	return {
		setPosts : (posts) => dispatch(setPostsStart(posts)),
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(ReduxSagaExample);
