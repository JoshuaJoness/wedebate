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
import Profile from './Profile'
import Settings from './Settings'

class Routes extends React.Component{
	render () {
	  return (
	    <BrowserRouter>
	      <Switch>
	        <Route path='/posttopic' component={PostTopic} />
					<Route path='/settings' component={Settings} />
					<Route path='/signup' component={Signup} />
					<Route path='/profile' component={Profile} />
					<Route path='/ranking' component={Ranking} />
					<Route path='/signup' component={Signup} />
					<Route path='/input' component={TextInput} />
					<Route path='/login' component={Login} />
					<Route path='/topic/:id' component={Topic} />
					<Route path='/nav' component={Nav} />
					<Route path='/' component={HomePage} />
	      </Switch>
	    </BrowserRouter>
	  )
	}
}

export default Routes
