import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserPrograms } from '../../Services/program.service';

import ProgramItem from './ProgramItem';
import './Program.css';

class Programs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programs: []
        }
    }

    componentDidMount(){
        let id = this.props.userInfo.id;
        getUserPrograms(id)
            .then(res => {
                this.setState({
                    programs: res.data
                })
            })
    }
    render() {
        console.log(this.state.programs)
        const programs = this.state.programs;
        const displayProgramItems = programs.map(program => {
            const index = programs.indexOf(program);
            return (<ProgramItem 
                key={index}
                index={index}
                id={program.id}
                name={program.name}
                desc={program.description}
            />)
        })
    return(
        <div className="program-wrapper">
            <div className="program-card-wrapper">
                {displayProgramItems}
            </div>
        </div>
    )}
}
function mapStateToProps(state){
    return state;
  }
  
export default connect( mapStateToProps ) (Programs) ;