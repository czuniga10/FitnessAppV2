import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.css';
import logo from './home.png';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuActive: false
        }
        this.handleMenu = this.handleMenu.bind(this);
    }
 
    handleMenu() {
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {
        const isMenuActive = this.state.menuActive;
    return(
        //TODO
        // - Create new header div
        // - add new section to header for drop down menu
        // - add isMenuActive state to the class of the new drop down menu so it only appears when true
        // - Grey out rest of page when it is active
        <div className="header">
            <div className="header-wrapper">
                <div className="title">
                    <img className="image" src={logo} />
                </div>
                <button>
                    <div className="menu-wrapper" onClick={() => {this.handleMenu()}}>
                        <div className={`bar top ${isMenuActive ? "topOpen" : ""}`}></div>
                        <div className={`bar middle ${isMenuActive ? "middleOpen" : ""}`}></div>
                        <div className={`bar bottom ${isMenuActive ? "bottomOpen" : ""}`}></div>
                    </div>
                </button>
            </div>
            <div className={`${isMenuActive ? "drop-menu-wrapper" : ""}`}>
                <div className={`${isMenuActive ? "drop-menu" : ""}`}>
                    <div className={`${isMenuActive ? "drop-menu-item" : "drop-menu-item-off"}`}>Dashboard</div>
                    <div className={`${isMenuActive ? "drop-menu-item" : "drop-menu-item-off"}`}>Projects</div>
                    <div className={`${isMenuActive ? "drop-menu-item" : "drop-menu-item-off"}`}>About</div>
                </div>
            </div>
        </div>
    )}
}
function mapStateToProps(state){
    return state;
  }
  
export default connect( mapStateToProps ) (Header) ;