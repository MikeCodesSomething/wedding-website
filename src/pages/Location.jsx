import { Link } from 'react-router-dom'

const Location = () => {
  return (
    <>
      <div className='title-box'>
        <h2>Location</h2>
        <div>The wedding and reception will both be held at the following address, there is ample space for parking in the field. For accomodation options, please see the <Link to="/accommodation">accommodation page</Link>.  
          <p>Hall Farm Produce</p>
          <p>Abbey Lane</p>
          <p>Slade Hooton</p>
          <p>Sheffield</p>
          <p>S25 1ZQ</p>
        <p>Click <a href='https://maps.app.goo.gl/oSBgwvcdmwDk8mAs6' target='_blank'>here</a> to view on google maps, or see the map below:</p>  
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.938714807062!2d-1.2137239241308992!3d53.398036170855725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790ab10a1d8f55%3A0x3887a66e1cd4de4!2sHall%20Farm%20Produce!5e0!3m2!1sen!2suk!4v1703416273963!5m2!1sen!2suk"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <p>What3Words location: ///zealous.sonic.chapels</p>
        </div>
      </div>
    </>
  )
}

export default Location
