import React from "react";
import Thumbnail_ from "./Thumbnail_";
import Thumbnail from "./Thumbnail";
import Button from "./Button";
import {Link} from "react-router-dom";
import "../styles/card.css";
import "../styles/grid.css";
import "../styles/button.css";
import axios from "axios";
import Nav from "./Nav";




class HomePage extends React.Component {

	state = {
		user: {},
		points:0,
		topics: [{
			user: {
			 username: "",
			}
		}],
		categories: [],
		topicDisplay: [],
		categoryDisplay: [],
		filters: {

					category: function(array, t) {return array.filter(p => p.category.label === t)},

				}
  };


searchFilter = (event) => {
	let topics = this.state.topics
	let input = event.target.value
	let topicDisplay = topics.filter(p => p.title.toLowerCase().includes(input.toLowerCase()))
	this.setState({topicDisplay: topicDisplay})
}

	categoryFilter = (e,filter) => {
		let topics = this.state.topics
		let input = e.target.value
		let topicDisplay = this.state.filters[filter](topics, input)
		this.setState({topicDisplay: topicDisplay})
	}






	// categoriesFilter = (event) => {
	// 	let topics = this.state.topics
	// 	let input = event.target.value
	// 	let topicDisplay = topics.filter(p => p.label.toLowerCase().includes(input.toLowerCase()))
	// 	this.setState({topicDisplay: topicDisplay})
	// 	array.filter(p => p.type.name) : array.filter(p => p.type.name === t)},
	// }








	componentWillMount() {
		let token = localStorage.getItem('token')

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


			axios.get('http://localhost:4000/profile', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				let user = this.state.user
				user = res.data
				this.setState({user})
			}).catch(err => {
				console.log(err);
			})


			axios.get('http://localhost:4000/ranking', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				let points = this.state.points
				points = res.data.total
				this.setState({points})
			}).catch(err =>{
				console.log(err)
			})


		}





  render() {
    return (
      <>
        <Nav user={this.state.user} points={this.state.points}/>
        <nav className="searchBar">
          <input onChange={this.searchFilter} type="text" className="search" placeholder="Search..." />
          <button>Popularity</button>
          <select  onChange={(e) => {this.categoryFilter(e, 'category')}}>
						<option value='Categories' >Categories</option>
					{this.state.categories.map((category, index) =>
						<option value={category.label} key={index}>{category.label}</option>
					)}
          </select>
        </nav>

        <div className="grid homepage">
				{

					this.state.topicDisplay.map((topic,index) => {
						return (<Link key={index} to={`/topic/${this.state.topics[index]._id}`}> <Thumbnail key={index} topic={topic}  /> </Link>)
					})
				}


        </div>
      </>
    );
  }
}

export default HomePage;
