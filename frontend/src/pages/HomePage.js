import React from 'react';

class HomePage extends React.Component{
    render() {
        return (
            <div data-testid="homepage" />
        )
    }
}

export default HomePage;
=======
import React from 'react';
import UserList from '../components/UserList';
import HoaxSubmit from '../components/HoaxSubmit';
import { connect } from 'react-redux';
import HoaxFeed from '../components/HoaxFeed';

class HomePage extends React.Component {
  render() {
    return (
      <div data-testid="homepage">
        <div className="row">
          <div className="col-8">
            {this.props.loggedInUser.isLoggedIn && <HoaxSubmit />}
            <HoaxFeed />
          </div>
          <div className="col-4">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedInUser: state
  };
};

export default connect(mapStateToProps)(HomePage);
>>>>>>> 1d4a5873ebd744a9f5f42bd4f5e4da70531b960a
