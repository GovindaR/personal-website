import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        {/* nav */}
        <nav>
          <div className='center clearfix'>
            <div className='logo'>
              <h4>GRM</h4>
            </div>
            <div className='navigation'>
              <input
                type='checkbox'
                className='navigation__checkbox'
                id='navi-toggle'
              />

              <label htmlFor='navi-toggle' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
              </label>

              <div className='navigation__background'>&nbsp;</div>

              <div className='navigation__nav'>
                <ul className='navigation__list'>
                  <li className='navigation__item'>
                    <a href='#Home' className='navigation__link'>
                      <span>01</span>About Me
                    </a>
                  </li>
                  <li className='navigation__item'>
                    <a href='#' className='navigation__link'>
                      <span>02</span>My Working Process
                    </a>
                  </li>
                  <li className='navigation__item'>
                    <a href='#' className='navigation__link'>
                      <span>03</span>My Qualification
                    </a>
                  </li>
                  <li className='navigation__item'>
                    <a href='#' className='navigation__link'>
                      <span>04</span>My Latest Works
                    </a>
                  </li>
                  <li className='navigation__item'>
                    <a href='#' className='navigation__link'>
                      <span>05</span>Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* Banner */}
        <section className='banner'>
          <div className='center clearfix'>
            <div className='banner_wrap'>
              <h3>Govinda Rana Magar</h3>
              <p>#UI/UX Developer #Music #Creative Direction </p>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
