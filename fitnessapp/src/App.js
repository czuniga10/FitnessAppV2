import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { getUserByID } from './Services/user.service';
import { updateUser } from './Actions/actionCreators';

import Programs from './Components/Programs/Program';
import Header from './Components/Header/header';
import Workouts from './Components/Workouts/Workouts';

//temporary, used for testing, when user logs in, user info will be provided by user/authO
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      // loading: false
    }
  }

  componentDidMount(){
    getUserByID(1)
      .then( res => {
        console.log(res.data[0]);
        let newUserInfo = res.data[0];
        this.props.updateUser(newUserInfo);
        // this.setState({loading: true});
        ;
      })
  }

    render() {
      // const {loading} = this.state;
      return (
        // !loading && 
        <div className="App">
          <Header/>
          <Programs/>
          {/* <Workouts /> */}
        </div>
      );
    }
  }

function mapStateToProps(state){
  return state;
}

export default withRouter( connect( mapStateToProps, {updateUser} ) (App) );