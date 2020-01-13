import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
    }
    
    render() {
    return(
        <div className="dashboard-wrapper">
            TEST
            TEST
            TEST
        </div>
    )}
}
function mapStateToProps(state){
    return state;
  }
  
export default connect( mapStateToProps ) (Dashboard) ;