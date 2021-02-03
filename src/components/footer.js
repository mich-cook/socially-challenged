import React, { Component } from "react";
import { Link } from "gatsby";

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
        <ul>
          <li><Link to="/privacy/">Privacy</Link></li>
        </ul>
        <p>Copyright &copy; {new Date().getFullYear()} mich. All rights reserved.</p>
        <p>The time is: {this.state.clock}</p>
      </footer>
    );
  }

};
