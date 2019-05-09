import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className='about' id='Home'>
        <div className='center'>
          <div className='about_left'>
            <img src={this.props.award} />
          </div>
          <div className='about_right'>
            <h5>Hi, i’m Govinda Rana Magar from Nepal.</h5>
            <div className='about_para'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut ipsum, modi harum unde at, illo error tempora id
                et repudiandae dolores voluptatibus? Nobis praesentium
                necessitatibus autem nemo, corporis ratione.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore aut ipsum, modi harum unde at, illo error tempora id
                et
              </p>
            </div>
            <button className='btn'>Hire Me!</button>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
