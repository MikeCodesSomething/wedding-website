import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <ul className="header-list">
         <Link to="/">Home</Link>
         <Link to="/location">Location</Link>
         <Link to="/rsvp">RSVP</Link>
         <Link to="/accomodation">Accomodation</Link>
      </ul>
    </>
  )
}

export default Header
