import React, { Component } from 'react';
class EduExp extends Component {
  render() {
    return (
      <section className='eduexp'>
        <div className='center clearfix'>
          <div className='item'>
            <h4>Education</h4>
            <div className='eduexp_content'>
              <div className='eduexp_content_item'>
                <h5>Bachelor</h5>
                <p>
                  It's 4 years IT programme(Bsc.Csit) which is affiliate to
                  Tribhuvam University. I completed with first division.
                </p>
              </div>
              <div className='eduexp_content_item'>
                <h5>+2</h5>
                <p>
                  It's 2 year programme(Science) which is affiliate to HSEB.I
                  completed with first devision.
                </p>
              </div>
            </div>
          </div>
          <div className='item'>
            <h4>Work Experience</h4>
            <div className='eduexp_content'>
              <div className='eduexp_content_item'>
                <h5>FrontEnd Developer</h5>
                <p>
                  I have 3 years experience.I can slice any design from psd to
                  html,css.Also know worpress and some knowledge about laravel.
                </p>
              </div>
              <div className='eduexp_content_item'>
                <h5>JS FullStack</h5>
                <p>
                  I am fresher.But recently i deveoped my portfolio website by
                  using Reactjs.And also know NodeJs, NextJs and redux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EduExp;
