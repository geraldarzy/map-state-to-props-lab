import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
          {this.props.numberOfUsers}
        <ul>
          Users!
          <hr></hr>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)


// Mapping State
// Now that we've got a working store, we want to get access to it and display the contents of our store's state.

// Connect the Users component similar to how it is connected in UserInput.

// Write a function in Users.js, but outside of the Users class, called mapStateToProps.
//  mapStateToProps accepts one argument, state, the current version of your store's state.
//   Use state to access the array of users. Your mapStateToProps function should return an object with keys.
//    Each key will become a prop in your component, allowing you to assign values based on the provided state.

// The Users component should display the username of a user submitted to the store.
//  To pass the final test, it should also display a total count of current users.
//   Try to use mapStateToProps to solve both, returning two keys, one for users and one for the userCount.