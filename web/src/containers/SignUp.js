import React, { Component } from 'react';
import { AppBar, Paper, RaisedButton, TextField, SelectField, MenuItem } from 'material-ui';
import { connect } from 'react-redux';
import { register } from '../redux/modules/user';

class SignUp extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    role: 'user'
  };
  handleClick = () => {
    this.props.register(this.state);
  };
  render() {
    return (
      <div style={styles.container}>
        <Paper style={styles.form} zDepth={1}>
          <TextField
            style={styles.textInput}
            hintText="Enter your Name"
            floatingLabelText="Name"
            onChange={(event, newValue) => this.setState({ fullName: newValue })}
          />
          <br />
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
          <SelectField
            floatingLabelText="Role"
            fullWidth
            value={this.state.role}
            onChange={(event, index, newValue) => this.setState({ role: newValue })}
          >
            <MenuItem value="user" primaryText="User" />
            <MenuItem value="business" primaryText="Business" />
          </SelectField>
          <RaisedButton
            label="Sign Up"
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
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
