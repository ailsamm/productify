import React from 'react';
import './ValidationError.css';

// used to display form validation error to user
export default function ValidationError(props) {
  if (props.message) {
    return (
      <div className="validationError">{props.message}</div>
    );
  }
  return <></>
}