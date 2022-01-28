import React from 'react';

const Contact = () => {
    console.log('I am here')
  return (<div style={{backgroundColor: 'green'}} >
            <h1>Hello reach at 
            <a href= {() => alert('The link is not active yet')}>www.gadget.com</a> </h1>
        </div>);
};

export default Contact;
