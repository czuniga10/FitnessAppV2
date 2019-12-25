import React, {Component} from 'react';
import {connect} from 'react-redux';

import { updateCheckedRedux } from '../../Actions/actionCreators';
import {updateChecked} from '../../Services/program.service';

class WorkoutItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: '',
            done: false
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
                    isChecked: res.data[0].iscomplete,
                    done: !this.state.done
                })
               this.props.updateCheckedRedux(res.data[0].iscomplete)
            })
    }

    render() {
        let style = {
            textDecoration: this.state.done ? "red line-through" : "none",
          };
        console.log(this.state)
        const {id, index, name, sets, reps, iscomplete } = this.props;

    return(
        <div className="item-wrapper">
            {/* <div className="item name"> {id}</div>  */}
           <div className="item name" style={style}>  {name}</div> 
           <div className="item sets" style={style}> {sets}</div>
           <div className="item reps" style={style}> {reps}</div>         
           <input className="complete" type="checkbox" onChange={() => {this.handleChecked(id)}}/>
        </div>
    )}
}

function mapStateToProps(state){
    return state;
}
  
export default connect( mapStateToProps, {updateCheckedRedux} ) (WorkoutItem);