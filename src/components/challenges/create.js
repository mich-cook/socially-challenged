import React, { Component } from "react";

import Layout from "../../components/layout.js";

export default class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "title": "",
      "teams": false,
      "isPrivate": true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = (target.type === "checkbox") ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Layout>
        <p>Create Your New Social Challenge</p>
        <form onSubmit={this.handleSubmit}>
          <label style={{ "display": "block" }}>Name: <input name="title" type="text" length="20" value={this.state.title} onChange={this.handleInputChange} /></label>
          <label style={{ "display": "block" }}>Teams? <input name="teams" type="checkbox" checked={this.state.teams} onChange={this.handleInputChange} /></label>
          <label style={{ "display": "block" }}>Private? <input name="isPrivate" type="checkbox" checked={this.state.isPrivate} onChange={this.handleInputChange} /></label>
          <div style={{ "border" : "1px solid black", "padding": "10px 20px" }}>
            <p>Challenge Metrics</p>
          </div>
          <button type="submit">Create</button>
        </form>
      </Layout>
    );
  }
};
