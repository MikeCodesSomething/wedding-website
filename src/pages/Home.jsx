import { Link } from 'react-router-dom'
import Photos from '../components/Photos'

const Home = () => {
  return (
    <>
      <div className='title-box'>
        <h2>Tabitha & Mike</h2>
        <h4>Are getting married!</h4>
        <h4>20th | July | 2024
          <p>12:00 pm</p>
        </h4>
        <Link style={{padding: '10px' }} to="/rsvp">RSVP</Link>
      </div>
      <div className='container'>
        {/* <img className='photo' src='./engagement-photo.jpg' alt="engagement photo" /> */}
        <Photos></Photos>
      </div>
    </>
  )
}

export default Home
