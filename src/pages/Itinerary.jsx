import React from 'react'

const Itinerary = () => {
  return (
    <>
      <div className='title-box'>
        <h2>Itinerary</h2>
        <p>This will get updated nearer the time, here's a rough itinerary for now:</p>
        <h3 className='list-heading'>Saturday</h3>
        <ul className='itinerary'>
            <li>12pm - Guest Arrival</li>
            <li>1:15pm - Drinks and canapes</li>
            <li>3pm - Wedding breakfast</li>
            <li>5:30pm - Speeches</li>
            <li>8pm - Live band</li>
            <li>9pm - Evening food</li>
            <li>12am - Silent Disco</li>
        </ul>
        <p>There will be an inflatable obstacle course for those who partake in such things.</p>
        <h3 className='list-heading'>Sunday</h3>
        <p>Please join us on sunday back in the field for some food and games from around 11am.
        </p>
      </div>
    </>
  )
}

export default Itinerary
