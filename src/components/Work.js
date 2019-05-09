import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div className={`item${this.props.id}`} key={this.props.id}>
        <div className='wrap-item'>
          <div className='item_img'>
            <img src={this.props.work} alt='item' />
          </div>
          <p>{this.props.para}</p>
        </div>
      </div>
    );
  }
}

export default Work;
