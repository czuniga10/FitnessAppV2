import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserPrograms } from '../../Services/program.service';

class Programs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programs: []
        }
    }

    componentDidMount(){
        let id = 1;
        getUserPrograms(id)
            .then(res => {
                this.setState({
                    programs: res.data
                })
            })
    }
    render() {
        console.log(this.state.programs)
    return(
        <div className="program-wrapper">
        </div>
    )}
}
function mapStateToProps(state){
    return state;
  }
  
export default connect( mapStateToProps ) (Programs) ;