/* 
      *                                                            *
    *****                                                        *****                             
      *                                                            *
        ==========================================================
        ==========                                      ==========
        ==========            Page For Icons            ==========
        ==========                                      ==========
        ==========================================================
      *                                                            *
    *****                                                        *****   
      *                                                            *
*/
import React, { Component } from 'react';

class Icons extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-plain">
                <div className="card-header" data-background-color="purple">
                  <h4 className="title">Material Design Icons</h4>
                  <p className="category">
                    Handcrafted by our friends from
                    <a target="_blank" href="https://design.google.com/icons/">
                      Google
                    </a>
                  </p>
                </div>
                <div className="card-content">
                  <div className="iframe-container hidden-sm hidden-xs">
                    <iframe src="https://design.google.com/icons/">
                      <p>Your browser does not support iframes.</p>
                    </iframe>
                  </div>
                  <div className="col-md-6 hidden-lg hidden-md text-center">
                    <h5>
                      The icons are visible on Desktop mode inside an iframe. Since the iframe is
                      not working on Mobile and Tablets please visit the icons on their original
                      page on Google. Check the
                      <a href="https://design.google.com/icons/" target="_blank">
                        Material Icons
                      </a>
                    </h5>
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
export default Icons;
