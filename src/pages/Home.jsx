import { Link } from 'react-router-dom'
import Photos from '../components/Photos'
import CountdownTimer from '../components/CountdownTimer'

const Home = () => {
  return (
    <>
      <div className='title-box'>
        <h2>Tabitha & Mike</h2>
        <h4>Are getting married!</h4>
        <h4>20th | July | 2024
          <p>12:00 pm</p>
        </h4>
        <h4>PSA on Dresscode
          <p>Normal wedding attire, just bear in mind it's a field!</p>
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
