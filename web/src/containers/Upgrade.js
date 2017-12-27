/* 
      *                                                            *
    *****                                                        *****                             
      *                                                            *
        ==========================================================
        ==========                                      ==========
        ==========           Page For   Upgrade         ==========
        ==========                                      ==========
        ==========================================================
      *                                                            *
    *****                                                        *****   
      *                                                            *
*/
import React, { Component } from 'react';

class Upgrade extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="card">
                <div className="card-header text-center" data-background-color="purple">
                  <h4 className="title">Material Dashboard PRO</h4>
                  <p className="category">
                    Are you looking for more components? Please check our Premium Version of
                    Material Dashboard.
                  </p>
                </div>
                <div className="card-content">
                  <div className="table-responsive table-upgrade">
                    <table className="table">
                      <thead>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">PRO</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Components</td>
                          <td className="text-center">60</td>
                          <td className="text-center">200</td>
                        </tr>
                        <tr>
                          <td>Plugins</td>
                          <td className="text-center">2</td>
                          <td className="text-center">15</td>
                        </tr>
                        <tr>
                          <td>Example Pages</td>
                          <td className="text-center">3</td>
                          <td className="text-center">27</td>
                        </tr>
                        <tr>
                          <td>Login, Register, Pricing, Lock Pages</td>
                          <td className="text-center">
                            <i className="fa fa-times text-danger" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check text-success" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation,
                            FullCalendar etc...
                          </td>
                          <td className="text-center">
                            <i className="fa fa-times text-danger" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check text-success" />
                          </td>
                        </tr>
                        <tr>
                          <td>Mini Sidebar</td>
                          <td className="text-center">
                            <i className="fa fa-times text-danger" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check text-success" />
                          </td>
                        </tr>
                        <tr>
                          <td>Premium Support</td>
                          <td className="text-center">
                            <i className="fa fa-times text-danger" />
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check text-success" />
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td className="text-center">Free</td>
                          <td className="text-center">Just $49</td>
                        </tr>
                        <tr>
                          <td className="text-center" />
                          <td className="text-center">
                            <a href="#" className="btn btn-round btn-fill btn-default disabled">
                              Current Version
                            </a>
                          </td>
                          <td className="text-center">
                            <a
                              target="_blank"
                              href="http://www.creative-tim.com/product/material-dashboard-pro/?ref=md-free-upgrade-live"
                              className="btn btn-round btn-fill btn-info"
                            >
                              Upgrade to PRO
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
export default Upgrade;
