import React, { Component } from 'react';
import { Paper, RaisedButton, TextField } from 'material-ui';
import { connect } from 'react-redux';
import { login } from '../redux/modules/user';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleClick = () => {
    this.props.login(this.state);
  };
  render() {
    return (
      <div style={styles.container}>
        <Paper style={styles.form} zDepth={1}>
          <TextField
            type="email"
            fullWidth
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <TextField
            type="password"
            fullWidth
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <RaisedButton
            label="Sign In"
            fullWidth
            secondary
            style={styles.button}
            onClick={this.handleClick}
          />
        </Paper>
      </div>
    );
  }
}

const styles = {
  container: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  form: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  button: {
    float: 'right',
    marginTop: 20
  }
};

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(SignIn);
