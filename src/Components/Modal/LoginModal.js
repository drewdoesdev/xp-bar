import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import styled from 'styled-components';
import {Modal} from './Modal.sc';

const Login = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: auto;
    background-color: #fff;
    border: 3px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    z-index: 200;
`;

class LoginModal extends Component {

  state = {
    username: "",
    password: ""
  }

  handleClose = () => {
      this.props.toggleModalAction(null, false);
  }

  handleClick = () => {
      alert(this.state.username);
  }
  handleInputChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();

  }

  render () {
    return (
        <Login>
            <Modal.Form width="90%" padding="20px 0 25px 0" onSubmit={this.handleSubmit}>
                <Modal.FormRow>
                     {/*<Modal.Close margin="1em 0 0 auto" width="20px" height="20px" padding="5px" onClick={this.handleClose} />*/}
                </Modal.FormRow>
                <Modal.H1>Sign In</Modal.H1>
                <Modal.FieldGroup id="username" margin="0.25em 0">
                    <Modal.Label htmlFor="username">Username</Modal.Label>
                    <Modal.Input
                        id="username"
                        name="username"
                        type="input"
                        value={this.state.username}
                        onChange={(e) => this.setState({
                            username: e.target.value
                        })}
                    />
                </Modal.FieldGroup>
                <Modal.FieldGroup id="password" margin="0.25em 0">
                    <Modal.Label htmlFor="password">Password</Modal.Label>
                    <Modal.Input
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({
                            password: e.target.value
                        })}
                    />
                </Modal.FieldGroup>
                <Modal.Button>Sign In</Modal.Button>
                <p>Or, <Link to="./register">Register to get started!</Link></p>
            </Modal.Form>
        </Login>
    )
  }
}

export default connect(
    (state) => ({
        // Map state to props
    }),
    {
        toggleModalAction
    }
)(LoginModal);