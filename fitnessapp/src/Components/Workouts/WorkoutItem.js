import React, {Component} from 'react';

class WorkoutItem extends Component {

    render() {
        const {id, name, sets, reps, iscomplete } = this.props;
    return(
        <div className="card-wrapper">
           <div className="item name"> {name}</div> 
           <div className="item sets"> {sets}</div>
           <div className="item reps"> {reps}</div>         
           <input className="complete" type="checkbox" />
        </div>
    )}
}
  
export default WorkoutItem;