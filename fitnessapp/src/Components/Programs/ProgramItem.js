import React, {Component} from 'react';

class ProgramItem extends Component {
    render() {
        const {id, name, desc } = this.props;
    return(
        <div className="card-wrapper">
            <div className="card-wrapper-inner">
                <div className="card-wrapper-front">
                    <div className="card-text">{name}</div>
                </div>
                <div className="card-wrapper-back">
                    <div className="card-text-back">{desc}</div>
                </div>
            </div>
        </div>
    )}
}
  
export default ProgramItem;