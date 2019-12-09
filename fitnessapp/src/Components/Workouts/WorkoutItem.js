import React, {Component} from 'react';

class WorkoutItem extends Component {

    render() {
        const {id, name, sets, reps, iscomplete } = this.props;
    return(
        <div className="card-wrapper">
           <div className="item"> {name}</div> 
           <div className="item"> {sets}</div>
           <div className="item"> {reps}</div>         
           <div className="item"> {iscomplete}</div>
        </div>
    )}
}
  
export default WorkoutItem;