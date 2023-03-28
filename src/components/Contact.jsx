import React from 'react';
import Address from './Address';

export default function Contact({ location, email, phone, cell }) {
  return (
    <div>
      {/* spread operator ... allows for accessing single props in the child component */}
      <Address {...location} />
      <div><em>Email: </em>{email}</div>
      <div><em>Phone: </em>Phone number:{phone}</div>
      <div><em>Cell: </em>{cell}</div>
    </div>
  )
}

