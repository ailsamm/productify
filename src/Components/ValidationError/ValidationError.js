import React from 'react';
import './ValidationError.css';

export default function ValidationError(props) {
  return props.message && <div className="validationError">{props.message}</div>;
}