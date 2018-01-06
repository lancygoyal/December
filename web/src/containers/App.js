import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from '../constants/theme-default';
import Data from '../constants/data';
import { toggle, logout } from '../redux/modules/user';

class App extends React.Component {
  handleChangeRequestNavDrawer = () => {
    this.props.toggle();
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    let { navDrawerOpen } = this.props;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header
            styles={styles.header}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}
            onLogoutClick={this.logout}
          />

          <LeftDrawer navDrawerOpen={navDrawerOpen} menus={Data.menus} {...this.props.data} />

          <div style={styles.container}>{this.props.children}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = {
  toggle,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(App));
