import React, {Component} from 'react';



class ProgramItem extends Component {
    render() {
        const {id, name } = this.props;
    return(
        <div className="program-wrapper">
            {name}
        </div>
    )}
}
  
export default ProgramItem;