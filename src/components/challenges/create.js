import React, { Component } from "react";

import Layout from "../../components/layout.js";

export default class Create extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "title": "",
      "teams": false,
      "isPrivate": true,
      /* date defaults empty to force user to choose */
      "start": "",
      "cutoff": "",
      "end": ""
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
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = (todayDate.getMonth() + 1).toString().padStart(2, "0");
    const todayDay = (todayDate.getDate().toString().padStart(2, "0"));

    const minDate = `${todayYear}-${todayMonth}-${todayDay}`;
    const maxDate = `${todayYear+1}-${todayMonth}-${todayDay}`;

    return (
      <Layout>
        <p>Create Your New Social Challenge</p>
        <form onSubmit={this.handleSubmit}>
          <label style={{ "display": "block" }}>Name: <input name="title" type="text" length="20" placeholder="Name of Challenge" value={this.state.title} onChange={this.handleInputChange} /></label>
          <label style={{ "display": "block" }}>Teams? <input name="teams" type="checkbox" checked={this.state.teams} onChange={this.handleInputChange} /></label>
          <label style={{ "display": "block" }}>Private? <input name="isPrivate" type="checkbox" checked={this.state.isPrivate} onChange={this.handleInputChange} /></label>

          <label style={{ "display": "block" }}>Start Date: <input name="start" type="date" required="required" value={this.state.start} min={minDate} max={maxDate} onChange={this.handleInputChange} pattern="\d{4}-\d{2}-\d{2}"/></label>
          <label style={{ "display": "block" }}>Cutoff Date: <input name="cutoff" type="date" required="required" value={this.state.cutoff} min={minDate} max={maxDate} onChange={this.handleInputChange} pattern="\d{4}-\d{2}-\d{2}"/></label>
          <label style={{ "display": "block" }}>End Date: <input name="end" type="date" required="required" value={this.state.end} min={minDate} max={maxDate} onChange={this.handleInputChange} pattern="\d{4}-\d{2}-\d{2}"/></label>

          <div style={{ "border" : "1px solid black", "padding": "10px 20px" }}>
            <p>Challenge Metrics</p>
          </div>
          <button type="submit">Create</button>
        </form>
      </Layout>
    );
  }
};
