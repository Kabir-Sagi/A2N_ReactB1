import React from "react";
import { connect } from "react-redux";

class UserComp extends React.Component {
  componentDidMount() {
    this.setState({
      userData: this.props.users,
    });
  }
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };
  }
  render() {
    return (
      <div>
        {this.state.userData.length > 0 ? (
          <table className="table table-hover">
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>CITY</th>
              <th>COMPANY NAME</th>
            </tr>
            {this.state.userData.map((data, index) => {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.address.city}</td>
                  <td>{data.company.name}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <h3>No User data</h3>
        )}
      </div>
    );
  }
}
export default connect((store) => {
  return {
    users: store.myReducer.users,
  };
}, null)(UserComp);
