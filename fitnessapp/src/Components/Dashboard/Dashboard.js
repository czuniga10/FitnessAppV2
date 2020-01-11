import React, {Component} from 'react';
import { connect } from 'react-redux';

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
        </div>
    )}
}
function mapStateToProps(state){
    return state;
  }
  
export default connect( mapStateToProps ) (Dashboard) ;