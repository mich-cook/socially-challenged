import React, { Component } from "react";

import Layout from "../../components/layout.js";

export default class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <Layout>
        <p>Create Your New Social Challenge</p>
        <label style={{ "display": "block" }}>Name: <input name="title" type="text" length="20" /></label>
        <label style={{ "display": "block" }}>Teams? <input name="teams" type="checkbox" /></label>
        <label style={{ "display": "block" }}>Private? <input name="private" type="checkbox" /></label>
        <div style={{ "border" : "1px solid black", "padding": "10px 20px" }}>
          <p>Challenge Metrics</p>
        </div>
        <button>Create</button>
      </Layout>
    );
  }
};
