import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className='center clearfix'>
          <div className='logo'>
            <img src={this.props.logo} />
          </div>
          <div className='btn-wrap'>
            <div className='btn-menu' />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
