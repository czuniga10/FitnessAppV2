import React, {Component} from 'react';

class WorkoutItem extends Component {

    render() {
        const {id, name, sets, reps, iscomplete } = this.props;
    return(
        <div className="card-wrapper">
            {name}
            {sets}
            {reps}         
            {iscomplete}
        </div>
    )}
}
  
export default WorkoutItem;