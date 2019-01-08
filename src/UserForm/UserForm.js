import React, { Component } from 'react';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';
import './UserForm.css';

class UserForm extends Component {

    state = {
        input: 'Test'
    }

    inputChangedHandler = ({target: { value }}) => {
        this.setState({
            input: value
        })
    }

    render(){
        const {state: {input }, inputChangedHandler} = this;

        return (
            <div className="UserForm">
                <UserInput
                    input={input}
                    change={inputChangedHandler}
                />

                <UserOutput val={input} />
                <UserOutput val={input} />
                <UserOutput val="test" />
            </div>
        );
    }
}

export default UserForm