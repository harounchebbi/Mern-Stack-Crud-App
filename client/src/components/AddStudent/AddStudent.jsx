import React, { Component } from "react";
import './AddStudent.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddStudent extends Component {
  state = {
    name: "",
    email: "",
    enrollnumber: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addStudent = async e => {
    e.preventDefault();
    try {
      const newStudent = await axios.post("/api/students/", {
          name: this.refs.name.value,
          email: this.refs.email.value,
          enrollnumber: this.refs.enrollnumber.value
        }
      );

      toast("Student " + newStudent.data.newStudent.name + " created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddStudent-Wrapper">
        <h1>Add Student:</h1>
        <form onSubmit={this.addStudent}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the students here"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Student-Input"
            required
            minLength="3"
            maxLength="33"
            id="name"
          />
          <label htmlFor="email">email: <b>(must be a valid email)</b></label>
          <input
            type="text"
            placeholder="enter your email here"
            name="email"
            onChange={this.onChangeHandler}
            ref="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="Add-Student-Input"
            required
            id="email"
          />
          <label htmlFor="enrollnumber">Enrollment Number: </label>
          <input
            type="number"
            placeholder="0 to 120"
            name="enrollnumber"
            min="1"
            max="120"
            onChange={this.onChangeHandler}
            ref="enrollnumber"
            className="Add-Student-Input"
            required
            id="enrollnumber"
          />
          <button type="submit" className="Add-Student-Submit fa fa-plus"></button>
          <button type="reset" className="Add-Student-Reset fa fa-refresh"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddStudent;
