import React from 'react';

const RSVP = () => {
  return (
    <>
    <div className='title-box'>
      <h2>RSVP</h2>
      <div className='padded'>
        <p>Please RSVP using the form below, if this isn't 
           loading try the <a href='https://forms.gle/4kjyMnNUWmjBDriL6'
                              target='_blank'>
                              direct link</a>
        </p>
      </div>
      <iframe
        title="RSVP Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScbmEhxbqSioNsEUQL6CVEYc0x-QHk057YgXcDDt-dGdhYOgg/viewform?embedded=true"
        width="100%"
        height="1350"
        frameborder="0"
        marginheight="0"
        marginwidth="10"
      >
        Loading…
      </iframe>
    </div>
    </>
  );
}

export default RSVP;
