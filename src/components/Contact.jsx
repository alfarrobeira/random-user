import React from 'react';

export default function Contact({address, email, phone, cell}) {
  return (
    <div>
      <p>Address: {address.street.name} {address.street.number}, {address.postcode} {address.city} - {address.country} </p>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
      <p>Cell number: {cell}</p>
    </div>
  )
}