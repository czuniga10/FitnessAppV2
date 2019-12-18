import React, {Component} from 'react';
import {connect} from 'react-redux';

import { updateCheckedRedux } from '../../Actions/actionCreators';
import {updateChecked} from '../../Services/program.service';

class WorkoutItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: ''
        }
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked(id) {      
        let body = {
            id,
            iscomplete: !this.state.isChecked
        }
        updateChecked(body) 
            .then(res => {
                this.setState({
                    isChecked: res.data[0].iscomplete
                })
               this.props.updateCheckedRedux(res.data[0].iscomplete)
            })

    }

    render() {
        console.log(this.state)
        const {id, index, name, sets, reps, iscomplete } = this.props;
        var check;
        if(iscomplete) {
            check = 'checked'
        }else{
            check = 'unchecked'
        }
    return(
        <div className="card-wrapper">
            <div className="item name"> {id}</div> 
           <div className="item name"> {name}</div> 
           <div className="item sets"> {sets}</div>
           <div className="item reps"> {reps}</div>         
           <input className="complete" type="checkbox" onChange={() => {this.handleChecked(id)}}/>
        </div>
    )}
}

function mapStateToProps(state){
    return state;
}
  
export default connect( mapStateToProps, {updateCheckedRedux} ) (WorkoutItem);