import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import LandingComponent from '../components/landing';


// eslint-disable-next-line react/prefer-stateless-function
class Landing extends PureComponent {
  render() {
    return (
      <LandingComponent/>
    );
  }
}

export default withRouter(Landing);
