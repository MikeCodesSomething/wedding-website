import Photos from '../components/Photos'
import CountdownTimer from '../components/CountdownTimer'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='title-box left-align'>
        <h2>Tabitha & Mike</h2>
        <h4>20th | July | 2024
          <p>12:00 pm</p>
        </h4>
        <h4>Vows
          <p>For those that couldn't make it (or make it out at the back) we've uploaded our <NavLink to='/vows'>vows</NavLink>
          </p>
        </h4>
      </div>
      <div className='container'>
        <Photos></Photos>
      </div>
      <div className='title-box'>
      <h2>Countdown!</h2>
      <CountdownTimer targetDate={new Date('2024-07-20T12:00')} />
    </div>
    </>
  )
}

export default Home
