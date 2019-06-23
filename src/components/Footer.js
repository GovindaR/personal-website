import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import 'jquery';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  }
  // handle
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  // validation

  validateMail() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = 'Minimum 3 symbols';
      formIsValid = false;
    }

    if (!this.state.subject || this.state.subject.length < 3) {
      errors.subject = 'Minimum 3 symbols';
      formIsValid = false;
    }
    if (!this.state.message || this.state.message.length < 10) {
      errors.message = 'Minimum 10 symbols';
      formIsValid = false;
    }

    if (!this.state.email || this.state.email.length < 3) {
      errors.email = 'Minimum 3 symbols';
      formIsValid = false;
    }

    // let pattern = /^w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // if (!pattern.test(this.state.email)) {
    //   errors.email = 'This is not a valid email';
    //   formIsValid = false;
    // }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  sendMessage(event) {
    event.preventDefault();

    if (!this.validateMail()) {
      return;
    }

    var temlateParams = {
      from_name: this.state.name + '(' + this.state.email + ')',
      to_name: 'govindaranamagar44@gmail.com',
      subject: this.state.subject,
      message_html: this.state.message
    };

    emailjs
      .send(
        'govinda',
        'template_DyWtTTpi',
        temlateParams,
        'user_BT2anG2m7DEEBkoBgXIz8'
      )
      .then(
        function(response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function(error) {
          console.log('FAILED...', error);
        }
      );
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  render() {
    return (
      <footer>
        <div className='footer_top'>
          <div className='center'>
            <div className='left_item'>
              <form
                id={this.props.id}
                method={this.props.method}
                action={this.props.action}
              >
                <h4>Leave a message</h4>
                <fieldset className='clearfix'>
                  <input
                    type='text'
                    placeholder='Name*'
                    name='name'
                    required='required'
                    onChange={this.handleInputChange.bind(this)}
                    value={this.state.name}
                    error={this.state.errors.name}
                  />
                  <input
                    type='email'
                    placeholder='Email*'
                    name='email'
                    required='required'
                    onChange={this.handleInputChange.bind(this)}
                    value={this.state.email}
                    error={this.state.errors.email}
                  />
                  <input
                    type='text'
                    placeholder='Subject*'
                    name='subject'
                    onChange={this.handleInputChange.bind(this)}
                    value={this.state.subject}
                    error={this.state.errors.subject}
                  />
                  <textarea
                    placeholder='Message*'
                    rows='10'
                    name='message'
                    onChange={this.handleInputChange.bind(this)}
                    value={this.state.message}
                    error={this.state.errors.message}
                  />
                  <button
                    className='btn'
                    type='submit'
                    value='Send'
                    onClick={this.sendMessage.bind(this)}
                    name='submit'
                    required='required'
                  >
                    Hire Me!
                  </button>
                </fieldset>
              </form>
            </div>
            <div className='rigth_item'>
              <ul>
                <li>
                  <h4>Address</h4>
                  <p> Dallu, Kathmandu, Bagmati, State-3, Nepal.</p>
                </li>
                <li>
                  <h4>Phone</h4>
                  <p>
                    +9779849783727 <br /> +9779818515782
                  </p>
                </li>
                <li>
                  <h4>WEB</h4>
                  <p>govindaranamagar44@gmail.com</p>
                </li>
                <li>
                  <h4>CV</h4>
                  <a href='/assets/img/CV.pdf'>Download</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer_bottom'>
          <div className='center'>
            <div className='social_media'>
              <a href='https://www.facebook.com/vega.rana.77' target='_blank'>
                <i className='fab fa-facebook-f' />
              </a>
              <a
                href='https://www.instagram.com/govinda_rana44/'
                target='_blank'
              >
                <i className='fab fa-instagram' />
              </a>
              <a
                href='https://www.linkedin.com/in/govinda-rana-3451a3135/'
                target='_blank'
              >
                <i className='fab fa-linkedin-in' />
              </a>
              <a href='https://twitter.com/GovindaRanaMag2' target='_blank'>
                <i className='fab fa-twitter' />
              </a>
            </div>
            <p>Copyright: Govinda Rana Magar, All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
