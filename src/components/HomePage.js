import React from "react";

import Thumbnail from "./Thumbnail";
import Button from "./Button";
import "../styles/card.css";
import "../styles/grid.css";
import "../styles/button.css";
import axios from "axios";
import Nav from "./Nav";




class HomePage extends React.Component {

	state = {
    topics: [],
  };

	componentWillMount() {

		let topics =  this.state.topics

		axios.get('http://localhost:4000/topic/')
			.then(res => {
				this.setState({

					topics: res.data,
			
				})
			})
			.catch(err => console.log(err))
		}

  render() {
    return (
      <>
        <Nav />
        <nav className="searchBar">
          <input type="text" className="search" placeholder="Search..." />
          <button>Popularity</button>
          <select>
            <option value="1">Categories</option>
            <option value="1">Politics</option>
            <option value="1">Health</option>
            <option value="1">Lifestyle</option>
            <option value="1">Technology</option>
            <option value="1">Philosophy</option>
          </select>
        </nav>
						<div>{this.state.topics.map(topic => {
							return <div>{topic.title}</div>
						})}
						</div>
        <div className="grid homepage">
          <a href="./topic">
            <Thumbnail />
          </a>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </>
    );
  }
}

export default HomePage;
