import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './Signup'
import TextInput from './TextInput'
import Ranking from './Ranking'

import Nav from './Nav'
import Topic from './Topic'
import HomePage from './HomePage'
import Login from './Login'
import PostTopic from './PostTopic'

class Routes extends React.Component{
	render () {
	  return (
	    <BrowserRouter>
	      <Switch>
	        <Route path='/signup' component={Signup} />
					<Route path='/ranking' component={Ranking} />
					<Route path='/input' component={TextInput} />
					<Route path='/login' component={Login} />
					<Route path='/topic' component={Topic} />
					<Route path='/nav' component={Nav} />
					<Route path='/' component={HomePage} />
	      </Switch>
	    </BrowserRouter>
	  )
	}
}

export default Routes
