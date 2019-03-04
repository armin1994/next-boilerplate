import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Form} from 'antd';
import Signin from '../signin';
import './style.less';

class Landing extends PureComponent {
  render() {
    const {step} = this.props;
    return (
      <div className="landing-container">
        <div className="my-container">
          <div className="login-slogan">
            <h1>Faas</h1>
            <h5>fluency as a service</h5>
          </div>
          <Signin {...this.props}/>
        </div>
      </div>
    );
  }


}

export default Landing;
