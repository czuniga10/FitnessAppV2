import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { getUserByID } from './Services/user.service';
import { updateUser } from './Services/Actions/actionCreators';


//temporary, used for testing, when user logs in, user info will be provided by user/authO
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }

  componentDidMount(){
    getUserByID(1)
      .then( res => {
        console.log(res.data[0]);
        let newUserInfo = res.data[0];
        this.props.updateUser(newUserInfo)
        ;
      })
  }

    render() {
      const {loading} = this.state;
      return (
        !loading && 
        <div className="App">
          <Route exact path='/' />
        </div>
      );
    }
  }

function mapStateToProps(state){
  return state;
}

export default withRouter( connect( mapStateToProps, {updateUser} ) (App) );