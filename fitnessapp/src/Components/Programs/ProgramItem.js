import React, {Component} from 'react';

class ProgramItem extends Component {
    render() {
        const {id, name } = this.props;
    return(
        <div className="card-wrapper">
            {name}
        </div>
    )}
}
  
export default ProgramItem;