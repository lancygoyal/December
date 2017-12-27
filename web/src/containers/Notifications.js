/* 
      *                                                            *
    *****                                                        *****                             
      *                                                            *
        ==========================================================
        ==========                                      ==========
        ==========       Page For Notifications          ==========
        ==========                                      ==========
        ==========================================================
      *                                                            *
    *****                                                        *****   
      *                                                            *
*/

import React, { Component } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <ToastContainer />
        <div className="container-fluid">
          <div className="card">
            <div className="card-header" data-background-color="purple">
              <h4 className="title">Notifications</h4>
              <p className="category">
                Handcrafted by our friend
                <a target="_blank" href="https://github.com/mouse0270">
                  Robert McIntosh
                </a>. Please checkout the
                <a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">
                  full documentation.
                </a>
              </p>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col-md-6">
                  <h5>Notifications Style</h5>
                  <div className="alert alert-info">
                    <span>This is a plain notification</span>
                  </div>
                  <div className="alert alert-info">
                    <button type="button" aria-hidden="true" className="close">
                      ×
                    </button>
                    <span>This is a notification with close button.</span>
                  </div>
                  <div className="alert alert-info alert-with-icon" data-notify="container">
                    <button type="button" aria-hidden="true" className="close">
                      ×
                    </button>
                    <i data-notify="icon" className="material-icons">
                      add_alert
                    </i>
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </div>
                  <div className="alert alert-info alert-with-icon" data-notify="container">
                    <button type="button" aria-hidden="true" className="close">
                      ×
                    </button>
                    <i data-notify="icon" className="material-icons">
                      add_alert
                    </i>
                    <span data-notify="message">
                      This is a notification with close button and icon and have many lines. You can
                      see that the icon and the close button are always vertically aligned. This is
                      a beautiful notification. So you don't have to worry about the style.
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>Notification states</h5>
                  <div className="alert alert-info">
                    <button type="button" aria-hidden="true" className="close">
                      ×
                    </button>
                    <span>
                      <b> Info - </b> This is a regular notification made with ".alert-info"
                    </span>
                  </div>
                  <div className="alert alert-success">
                    <button type="button" aria-hidden="true" className="close">
                      ×
                    </button>
                    <span>
                      <b> Success - </b> This is a regular notification made with ".alert-success"
                    </span>
                  </div>
                  <div className="alert alert-warning">
                    <button type="button" aria-hidden="true" className="close">
                      ×
                    </button>
                    <span>
                      <b> Warning - </b> This is a regular notification made with ".alert-warning"
                    </span>
                  </div>
                  <div className="alert alert-danger">
                    <button type="button" aria-hidden="true" className="close">
                      ×
                    </button>
                    <span>
                      <b> Danger - </b> This is a regular notification made with ".alert-danger"
                    </span>
                  </div>
                  <div className="alert alert-primary">
                    <button type="button" aria-hidden="true" className="close">
                      ×
                    </button>
                    <span>
                      <b> Primary - </b> This is a regular notification made with ".alert-primary"
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="places-buttons">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h5>
                      Notifications Places
                      <p className="category">Click to view notifications</p>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="col-md-4">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          toast.success('Success', { position: toast.POSITION.TOP_LEFT });
                        }}
                      >
                        Top Left
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          toast.error('Danger', { position: toast.POSITION.TOP_CENTER });
                        }}
                      >
                        Top Center
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          toast.warn('Warning', { position: toast.POSITION.TOP_RIGHT });
                        }}
                      >
                        Top Right
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="col-md-4">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          toast.info('info', { position: toast.POSITION.BOTTOM_LEFT });
                        }}
                      >
                        Bottom Left
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          toast.success('success', { position: toast.POSITION.BOTTOM_CENTER });
                        }}
                      >
                        Bottom Center
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                          toast.warn('Warning', { position: toast.POSITION.BOTTOM_RIGHT });
                        }}
                      >
                        Bottom Right
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Notifications;
