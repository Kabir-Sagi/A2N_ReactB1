import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.setState({
      posts: this.props.posts,
    });
  }
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          {this.state.posts.length > 0 ? (
            this.state.posts.map((data, index) => {
              return (
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h4>{data.title}</h4>
                      <p>{data.body}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>Post Data is not Available</h3>
          )}
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    posts: store.myReducer.posts,
  };
}, null)(Post);
