import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  submit = () => {
    if (this.state.username === "A2N" && this.state.password === "Academy") {
      this.props.fnUpdate(true);
    } else {
      alert("Please check Your Credentials");
    }
  };

  render() {
    return (
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 bg-dark p-5">
            <h4 className="text-primary font-weight-bold">Login From</h4>
            <div className="mt-3">
              <div className="form-group">
                <input
                  onChange={(e) => {
                    this.setState({
                      username: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Enter UserName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary" onClick={this.submit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
