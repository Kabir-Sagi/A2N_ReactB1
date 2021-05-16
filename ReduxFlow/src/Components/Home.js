import React, { Component } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import CardGroup from "./CardGroup1";
import Footer from "./Footer";
import Axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
import myStore from "../Redux/store";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Axios.get("http://jsonplaceholder.typicode.com/users").then(
      (response) => {
        // console.log("USers", response.data);
        myStore.dispatch({
          type: "USERS",
          payload: response.data,
        });
        Axios.get("https://jsonplaceholder.typicode.com/posts").then(
          (response) => {
            // console.log("Post", response.data);
            myStore.dispatch({
              type: "POSTS",
              payload: response.data,
            });
            Axios.get("https://jsonplaceholder.typicode.com/comments").then(
              (response) => {
                // console.log("Comments", response.data);
                myStore.dispatch({
                  type: "COMMENTS",
                  payload: response.data,
                });
              },
              (error) => {
                alert("Failed to get the Comments Data");
              }
            );
          },
          (error) => {
            alert("Failed to get Post Data");
          }
        );
      },
      (error) => {
        alert("Failed to get User Data");
        console.log(error);
      }
    );
  }
  render() {
    return (
      <div className="container">
        <Carousel />
        <Card title="React Js" name="Kabir" />
        <CardGroup />
        <Card title="Angular" name="Sagar" />
        <CardGroup />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Home);
