/* 
      *                                                            *
    *****                                                        *****                             
      *                                                            *
        ==========================================================
        ==========                                      ==========
        ==========           Page For   User            ==========
        ==========                                      ==========
        ==========================================================
      *                                                            *
    *****                                                        *****   
      *                                                            *
*/
import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header" data-background-color="purple">
                  <h4 className="title">Edit Profile</h4>
                  <p className="category">Complete your profile</p>
                </div>
                <div className="card-content">
                  <form>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group label-floating">
                          <label className="control-label">Company (disabled)</label>
                          <input type="text" className="form-control" disabled />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group label-floating">
                          <label className="control-label">Username</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group label-floating">
                          <label className="control-label">Email address</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group label-floating">
                          <label className="control-label">Fist Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group label-floating">
                          <label className="control-label">Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group label-floating">
                          <label className="control-label">Adress</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group label-floating">
                          <label className="control-label">City</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group label-floating">
                          <label className="control-label">Country</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group label-floating">
                          <label className="control-label">Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>About Me</label>
                          <div className="form-group label-floating">
                            <label className="control-label">
                              {' '}
                              Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat
                              Lambo.
                            </label>
                            <textarea className="form-control" rows="5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary pull-right">
                      Update Profile
                    </button>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-profile">
                <div className="card-avatar">
                  <a href="#pablo">
                    <img className="img" src="../assets/img/faces/marc.jpg" />
                  </a>
                </div>
                <div className="content">
                  <h6 className="category text-gray">CEO / Co-Founder</h6>
                  <h4 className="card-title">Alec Thompson</h4>
                  <p className="card-content">
                    Don't be scared of the truth because we need to restart the human foundation in
                    truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                    the back is...
                  </p>
                  <a href="#pablo" className="btn btn-primary btn-round">
                    Follow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
