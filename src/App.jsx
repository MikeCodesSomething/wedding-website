import './App.css'
import Header from './components/Header'
import './style.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Location from './pages/Location';
import RSVP from './pages/RSVP';
import Accommodation from './pages/Accommodation';
import Registry from './pages/Registry';

function App() {

  
  return (
    <Router basename="/">
      <Header />
      <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/location'> <Location /></Route>
        <Route path='/rsvp'> <RSVP /> </Route>
        <Route path='/accomodation'> <Accommodation /> </Route>
        <Route path='/registry'> <Registry /> </Route>
      </Switch>
    </Router>
  )
}

export default App
