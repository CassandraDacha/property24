import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LogIn from './components/LogIn'
import Advice from './components/Advice'
import Calculators from './components/Calculators'
import Commercial from './components/Commercial'
import Developments from './components/Developments'
import ForSale from './components/ForSale'
import ListPrivately from './components/ListPrivately'
import SignUp from './components/SignUp'
import ToRent from './components/ToRent'
import Details from './components/Details'
import Details1 from './components/Details1'
import Details2 from './components/Details2'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
      <Route path = '/login' component={LogIn}/>
      <Route path = '/signup' component={SignUp}/>
      <Route path = '/to-rent' component={ToRent}/>
      <Route path = '/advice' component={Advice}/>
      <Route path = '/calculators' component={Calculators}/>
      <Route path = '/new-develpments' component={Developments}/>
      <Route exact path = '/' component={ForSale}/>
      <Route path = '/commercial-property' component={Commercial}/>
      <Route path = '/private-listing/sell-my-property' component={ListPrivately}/>
      <Route path = '/one' component={Details}/>
      <Route path = '/two' component={Details1}/>
      <Route path = '/three' component={Details2}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;