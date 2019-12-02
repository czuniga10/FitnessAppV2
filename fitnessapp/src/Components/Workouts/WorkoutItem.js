import React, {Component} from 'react';

class WorkoutItem extends Component {

    render() {
        const {id, name, sets, reps, isComplete } = this.props;
        console.log(reps)
    return(
        <div className="card-wrapper">
            {name}
            {sets}
            {reps}         
            {isComplete}
        </div>
    )}
}
  
export default WorkoutItem;