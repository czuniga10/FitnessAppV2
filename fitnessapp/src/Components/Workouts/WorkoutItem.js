import React, {Component} from 'react';

class WorkoutItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked(id) {      
        this.setState({
            isChecked: !this.state.isChecked
        })

    }

    render() {
        const {id, index, name, sets, reps, iscomplete } = this.props;
        console.log(this.state.isChecked + " " + id)
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
  
export default WorkoutItem;