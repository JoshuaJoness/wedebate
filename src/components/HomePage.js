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
    topics: [{
			user: {
				 username: "",
			}
		}],
		categories: [],
		topicDisplay: [],

  };


	searchFilter = (event) => {
		let topics = this.state.topics
		let input = event.target.value
		let topicDisplay = topics.filter(p => p.title.toLowerCase().includes(input.toLowerCase()))
		this.setState({topicDisplay: topicDisplay})
	}

	// categoriesFilter = (event) => {
	// 	let topics = this.state.topics
	// 	let input = event.target.value
	// 	let topicDisplay = topics.filter(p => p.label.toLowerCase().includes(input.toLowerCase()))
	// 	this.setState({topicDisplay: topicDisplay})
	// 	array.filter(p => p.type.name) : array.filter(p => p.type.name === t)},
	// }






	componentDidMount() {

Promise.all([
	axios.get('http://localhost:4000/topic/'),
	axios.get('http://localhost:4000/category/')
]).then(([topics, categories]) => {
				this.setState({
					topics: topics.data,
					categories: categories.data,
					topicDisplay: topics.data
				})
			})
		}


  render() {
    return (
      <>
        <Nav user={this.state.user}/>
        <nav className="searchBar">
          <input onChange={this.searchFilter} type="text" className="search" placeholder="Search..." />
          <button>Popularity</button>
          <select>
					{this.state.categories.map((category, index) =>
						<option value={category.label} key={index}>{category.label}</option>
					)}
          </select>
        </nav>

        <div className="grid homepage">
				{

					this.state.topicDisplay.map((topic,index) => {
						return <Thumbnail key={index} topic={topic}  />
					})
				}

        </div>
      </>
    );
  }
}

export default HomePage;
