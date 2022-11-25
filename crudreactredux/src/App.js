import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from 'prop-types';
import { getBlog, addBlog, editBlog, deleteBlog } from './Redux/action';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      blogTitle: "",
      blogDescription: ""
    };
  }

  static propTypes = {
    blogs: PropTypes.array.isRequired,
    getBlog: PropTypes.func.isRequired,
    addBlog: PropTypes.func.isRequired,
    editBlog: PropTypes.func.isRequired,
    deleteBlog: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getBlog();
  }

  submitData = () => {
    if (this.state.blogTitle && this.state.blogDescription && !this.state.id) {
      const newBlog = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        blogTitle: this.state.blogTitle,
        blogDescription: this.state.blogDescription,
      };

      this.props.addBlog(newBlog);
    } 
    else if (this.state.blogTitle && this.state.blogDescription && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        blogTitle: this.state.blogTitle,
        blogDescription: this.state.blogDescription,
      };

      this.props.editBlog(updatedDetails);
    } 
    else {
      alert('Enter Blog Details.');
    }

    this.clearData();
  }

  editDetails = (data) => {
    this.setState({
      id: data.id,
     blogTitle: data.blogTitle,
      blogDescription: data.blogDescription
    })
  }

  deleteBlog = (id) => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteBlog(id);
    }
  }

  handleTitleChange = (e) => {
    this.setState({
      blogTitle: e.target.value
    });
  }

  handleDescriptionChange = (e) => {
    this.setState({
      blogDescription: e.target.value
    });
  }

  clearData = () => {
    this.setState({
      id: 0,
      blogTitle: "",
      blogDescription: ""
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blog App</h1>
        </header>
        <p className="App-intro">
          <div className="leftsection">
            Blog Title :<br></br> <input onChange={this.handleTitleChange} value={this.state.blogTitle} type="text" placeholder="Blog Title" /> <br />
            Blog Description : <br></br> <textarea onChange={this.handleDescriptionChange} value={this.state.blogDescription} type="text" placeholder="Blog Description" rows="10" cols="30" /><br />
            {this.state.id ? <button onClick={this.submitData}>UPDATE</button> : <button onClick={this.submitData}>ADD</button>} &nbsp;&nbsp;<button onClick={this.clearData}>CLEAR</button>
          </div>
          <div className="rightsection">
            {/* <table>
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Blog Title</th>
                  <th>Blog Description</th>
                  <th>Action(s)</th>
                </tr>
              </thead>
              <tbody> */}
                {this.props.blogs && this.props.blogs.map((data, index) => {
                  return <tr key={(index + 1)}>
                    
                    
                    <dt><strong>{data.blogTitle}</strong></dt>
                    <dd>{data.blogDescription}</dd>
                    <dd><button onClick={() => this.editDetails(data)}>EDIT</button> <button onClick={() => this.deleteBlog(data.id)}>DELETE</button> </dd>
                    <br></br>
                    <br></br>
                  </tr>
                  
                  
                })}
              {/* </tbody>
            </table> */}
          </div>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs
});

export default connect(mapStateToProps, { getBlog, addBlog, editBlog, deleteBlog })(App);