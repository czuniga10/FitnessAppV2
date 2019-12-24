import React, {Component} from 'react';

class ProgramItem extends Component {
    render() {
        const {id, name } = this.props;
    return(
        <div className="card-wrapper">
            <div className="card-wrapper-inner">
                <div className="card-wrapper-front">
                    <div className="card-text">{name}</div>
                </div>
                <div className="card-wrapper-back">
                    TEST TEST <br/>
                    TEST <br/>
                    TEST
                </div>
            </div>
        </div>
    )}
}
  
export default ProgramItem;