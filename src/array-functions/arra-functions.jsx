import React, { Component } from 'react'

export class ArrayFunctionsExample extends Component {


    // change setting posts in redux to local state cop[ied from redux file and this is uncompleted


    fetchPosts = async () => {
		const postsData = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await postsData.json();
		const slice = posts.slice(0,5);
		const find = posts.find( item => item.id === 4 );
		const filter = posts.filter( item => item.userId === 4 );
		const reduce =  posts.reduce(( acc, currentValue ) => {
			return acc = acc + currentValue.userId
		},0);

		console.log("data",reduce);
		return posts;
	}

	async componentDidMount() {
		const { setPosts } = this.props;
		const posts = await this.fetchPosts();
		setPosts(posts);
		this.setState({
			isLoading : false
		})
	}

    render() {
        const { isLoading } = this.state;
		const { posts } = this.props;
        return (
            <div className="container">
				<div className="row mt-4">
					{
						isLoading === false && posts.length > 0 ?
							posts.filter((item, index) => index < 4)
								.map(postItem => {
									return (
										<div key={postItem.id} className="col-sm-3">
											<h5>{postItem.title}</h5>
											<p>{postItem.body}</p>
											<button className="btn btn-primary" onClick={() => this.props.deletePosts(postItem.id)}> Delete Post</button>
										</div>
									);
								})
							:
							<div>
								loading..
							</div>
					}
				</div>
				<hr />
			</div>
        )
    }
}

export default ArrayFunctionsExample
