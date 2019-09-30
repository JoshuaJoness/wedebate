import React from "react";
import Thumbnail_ from "./Thumbnail_";
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
		categories: []

  };

	componentDidMount() {

Promise.all([
	axios.get('http://localhost:4000/topic/'),
	axios.get('http://localhost:4000/category/')
]).then(([topics, categories]) => {
				this.setState({
					topics: topics.data,
					categories: categories.data
				})
			})
		}

  render() {
    return (
      <>
			<div>{this.state.topics.map(t => t.percentage)}</div>
        <Nav />
        <nav className="searchBar">
          <input type="text" className="search" placeholder="Search..." />
          <button>Popularity</button>
          <select>
					{this.state.categories.map((category, index) =>
						<option value={category.name} key={index}>{category.name}</option>
					)}
          </select>
        </nav>

        <div className="grid homepage">
				{

					this.state.topics.map((topic,index) => {
						return <Thumbnail key={index} topic={topic}  />
					})
				}

        </div>
      </>
    );
  }
}

export default HomePage;
