import React, {Component} from 'react';
import { connect } from 'react-redux';

class Programs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programs: []
        }
    }

    componentDidMount(){
        
    }
    render() {
    return(
        <div className="program-wrapper">
        </div>
    )}
}
function mapStateToProps(state){
    return state;
  }
  
export default connect( mapStateToProps ) (Programs) ;