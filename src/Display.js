import React, { Component} from 'react';


class Display extends Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <div> Name: {this.props.name}</div>
                <div> Age: {this.props.age}</div>
                <div> BirthMonth: {this.props.birthMonth}</div>
                <div> BirthYear: {this.props.birthYear}</div>
            </div>
        )
        
    }
}
export default Display;