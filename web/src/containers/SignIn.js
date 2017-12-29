import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../redux/modules/user';

class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Please Sign In</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.props.login}>
                  <fieldset>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        autoFocus
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"
                      />
                    </div>
                    <input
                      className="btn btn-lg btn-success btn-block"
                      type="submit"
                      value="Login"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(UserActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
