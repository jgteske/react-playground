import React from 'react';
import UserInterface from './UserInterface';

const UserComponent: React.FC<UserInterface> = (props) => {
  return (
    <div>
      <h1>User Information</h1>
      Hello, <b>{props.name}</b>
      <br />
      You are <b>{props.age} years old</b>
      <br />
      You live at: <b>{props.address}</b>
      <br />
      You were born:{' '}
      <b>
        {typeof props.dob === 'object' && props.dob instanceof Date
          ? props.dob.toDateString()
          : props.dob}
      </b>
      <br />
      Your email: <b>{props.email}</b>
      {props.message && (
        <div>
          <br />
          Your message: <b> {props.message} </b>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
