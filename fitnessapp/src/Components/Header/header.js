import React, {Component} from 'react';
import { connect } from 'react-redux';

import './header.css';
import logo from './home.png';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        
    }
    render() {
    return(
        <div className="header-wrapper">
            <div className="title">
                <img className="image" src={logo} />
            </div>
            <div className="button-wrapper">
                <button >HOME</button>
            </div>
        </div>
    )}
}
function mapStateToProps(state){
    return state;
  }
  
export default connect( mapStateToProps ) (Header) ;