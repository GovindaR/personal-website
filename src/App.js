import React, { Component } from 'react';

import './App.css';

// images
import logo from './img/logo.png';
import award from './img/award.png';
import work1 from './img/work1.png';
import work2 from './img/work2.png';
import work3 from './img/work3.png';
import work4 from './img/work4.png';
// Components
import Work from './components/Work';
import About from './components/About';
import Header from './components/Header';
import EduExp from './components/EduExp';
import Footer from './components/Footer';
import LatestWork from './components/LatestWork';
import Certifiacate from './components/Certifiacate';

class App extends Component {
  render() {
    let working = [
      {
        id: 1,
        para: 'Design',
        work: work1
      },
      { id: 2, para: 'Development', work: work2 },
      { id: 3, para: 'Testing', work: work3 },
      { id: 4, para: 'Luanch', work: work4 }
    ];
    return (
      <div className='App'>
        <Header logo={logo} />

        <About award={award} />
        {/* work */}
        <section className='work'>
          <div className='center'>
            <div className='title'>
              <h3>My Working Process</h3>
              <p>#UI/UX Developer #Music #Creative Direction </p>
              <div className='item_wrap'>
                {working.map(image => {
                  return (
                    <Work work={image.work} id={image.id} para={image.para} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <EduExp />
        <LatestWork />
        <Certifiacate />
        <Footer />
      </div>
    );
  }
}

export default App;
