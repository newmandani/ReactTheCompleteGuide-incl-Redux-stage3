import React, { Component } from 'react';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';
import './UserForm.css';

class UserForm extends Component {

    state = {
        input: 'Test'
    }

    inputChangedHandler = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    render(){
        return (
            <div className="UserForm">
                <UserInput
                    input={this.state.input}
                    change={this.inputChangedHandler}
                />

                <UserOutput val={this.state.input} />
                <UserOutput val={this.state.input} />
                <UserOutput val="test" />
            </div>
        );
    }
}

export default UserForm