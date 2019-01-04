import React from 'react';

class SinglePost extends React.Component{
    render() {
        const post = this.props.post

        return (<div>
            <h1>
                {post.title}
            </h1>

            <p>
                {post.body}
            </p>
        </div>
        )
    }
}

export default SinglePost