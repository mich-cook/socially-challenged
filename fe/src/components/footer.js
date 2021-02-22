import React, { Component } from "react";
import { Link } from "react-router-dom";

const ListLink = props => (
  <li style={{ "display": "inline-block", "marginRight": "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clock: "now"
    };
  }

  async componentDidMount() {
    let newTime = await fetch("http://worldclockapi.com/api/json/utc/now").then();
    newTime = await newTime.json();
    this.setState({ "clock": newTime.currentFileTime });
  }

  render() {
    return (
      <footer>
        <ul style={{ "padding": 0, "margin": 0, "listStyleType": "none" }}>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/privacy">Privacy</ListLink>
          <ListLink to="/faq">FAQs</ListLink>
        </ul>
        <p>Copyright &copy; {new Date().getFullYear()} mich. All rights reserved.</p>
        <p>The time is: {this.state.clock}</p>
      </footer>
    );
  }

};
