import './App.css'
import Header from './components/Header'
import './style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Location from './pages/Location';
import RSVP from './pages/RSVP';
import Accommodation from './pages/Accommodation';

function App() {

  
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/location' exact> <Location /></Route>
        <Route path='/rsvp' exact> <RSVP /> </Route>
        <Route path='/accomodation' exact> <Accommodation /> </Route>
        </Switch>
    </Router>
  )
}

export default App
