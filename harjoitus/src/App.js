import React, { Component } from 'react';
import {getPosts} from 'octo-sample-api';
import './App.css';
import {SinglePost} from;

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: null,
            filter: "",
            reverse: false,
            selectedPost: null
        }
        this.setFilter = this.setFilter.bind(this);
        this.setReverse = this.setReverse.bind(this);
        this.setSelectedPost = this.setSelectedPost.bind(this);
    }

    componentDidMount(){
        console.log("cdm");
        getPosts().then(posts =>
        {
            console.log(posts)
            this.setState({posts: posts})
        });
    }

    setFilter(e){
        this.setState({filter: e.target.value})
    }

    setReverse(e){
        this.setState({reverse: !this.state.reverse})
    }

    setSelectedPost(){

    }

  render() {
      if (this.state.posts === null) {
          return "Ladataan";
      }


      const filtered = this.state.posts.filter(post =>
          post.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
      );


      if (this.state.reverse) {
          filtered.reverse();
      }


    return (
      <div className="posts-app">
          <div className="post-list">
          <input
            value={this.state.filter}
            type="text"
            onChange={this.setFilter}></input>
          <ul>
          {filtered.map(post => {
              return <li key={post.id} onClick={() => this.setSelectedPost(post)}>{post.title}</li>
          })}
          </ul>
            <button onClick={this.setReverse}> Käännä järjestys</button>
          <div className="post-count">
            {filtered.length} / {this.state.posts.length}
          </div>
          </div>

          <div className="single-post">
              {this.state.selectedPost ? <SinglePost post={{this.state.}}
          </div>
      </div>
    );
  }
}

export default App;
