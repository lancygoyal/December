import React, { Component } from 'react';

export default class SignUp extends Component {
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
                <form>
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
                        value=""
                      />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                      </label>
                    </div>
                    <a href="index.html" className="btn btn-lg btn-success btn-block">
                      Login
                    </a>
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
