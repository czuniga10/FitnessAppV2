import React, {Component} from 'react';

class ProgramItem extends Component {
    render() {
        let test = Math.floor(Math.random()*8) +1
        const {id, name } = this.props;
    return(
        <div className="program-wrapper">
            {name}
            <img src={require('../../Assets/'+test+'.png')} width="50" height="50" alt='img'/>
        </div>
    )}
}
  
export default ProgramItem;