import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class LatestWork extends Component {
  render() {
    return (
      <Router>
        <section className='lastest_work'>
          <div className='center title'>
            <h3>My Latest Works</h3>
            <p>Hi, i’m Govinda Rana Magar from Nepal.</p>
            <div className='wrap_latest_work'>
              <div className='sky_blue'>
                <a href='http://cinema-ghar.com/' target='_blank'>
                  <img src='/assets/img/web1.png' alt='web1' />
                </a>
              </div>
              <div className='purple'>
                <a
                  href='http://elitehimalayanadventures.com/en'
                  target='_blank'
                >
                  <img src='/assets/img/web2.png' alt='web2' />
                </a>
              </div>
              <div className='dark_blue'>
                <a href='https://www.everestwings.com/' target='_blank'>
                  <img src='/assets/img/web4.png' alt='web4' />
                </a>
              </div>
              <div className='light_red'>
                <a href='http://omlotbus.com/' target='_blank'>
                  <img src='/assets/img/web5.png' alt='web3' />
                </a>
              </div>
              <div className='two_item purple'>
                <a href='http://jagdambacement.com/' target='_blank'>
                  <img src='/assets/img/web3.png' alt='web5' />
                </a>
              </div>
              <div className='dark_blue'>
                <a href='https://paraskhadka.com/' target='_blank'>
                  <img src='/assets/img/web6.png' alt='web6' />
                </a>
              </div>
              <div className='light_red'>
                <a href='http://thesqwash.com/' target='_blank'>
                  <img src='/assets/img/web7.png' alt='web7' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default LatestWork;
