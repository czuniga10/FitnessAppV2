import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserWorkouts } from '../../Services/program.service';

import WorkoutItem from './WorkoutItem';
import './Workouts.css';

class Workouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workouts: []
        }
    }

    componentDidMount(){
        let id = 1;
        getUserWorkouts(id)
            .then(res => {
                this.setState({
                    workouts: res.data
                })
            })
    }
    
    render() {
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
                iscomplete={workout.iscomplete}
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