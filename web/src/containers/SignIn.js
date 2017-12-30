import React, { Component } from 'react';
import { AppBar, Paper, RaisedButton, TextField } from 'material-ui';
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
            style={styles.textInput}
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <br />
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
    textAlign: 'center'
  },
  form: {
    margin: 30,
    padding: 20,
    display: 'inline-block'
  },
  textInput: {
    backgroundColor: 'white'
  },
  button: {
    marginTop: 25,
    marginBottom: 10
  }
};

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
