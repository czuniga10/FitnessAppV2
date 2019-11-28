import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserWorkouts } from '../../Services/workouts.service';

import WorkoutItem from './WorkoutItem';
import './Workout.css';

class Workouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workouts: []
        }
    }

    componentDidMount(){
        let id = 1;
        getUserworkouts(id)
            .then(res => {
                this.setState({
                    workouts: res.data
                })
            })
    }
    render() {
        console.log(this.state.workouts)
        const workouts = this.state.workouts;
        const displayWorkoutItems = workouts.map(workout => {
            const index = workouts.indexOf(workout);
            return (<WorkoutItem 
                key={index}
                index={index}
                id={workout.id}
                name={workout.name}
                sets={workout.sets}
                reps={workout.reps}
                isComplete={workout.isComplete}
            />)
        })
    return(
        <div className="workout-wrapper">
            <div className="workout-card-wrapper">
                {displayWorkoutItems}
            </div>
        </div>
    )}
}
function mapStateToProps(state){
    return state;
  }
  
export default connect( mapStateToProps ) (Workouts) ;