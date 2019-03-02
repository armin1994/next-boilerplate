import React, { PureComponent } from 'react';
import { withRouter } from 'next/router'
import { DefaultLayout } from '../components/layout';

const styles = {
  wrapper: {
    backgroundColor: '#fff',
    margin: '40px 20%',
    padding: 40,
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class About extends PureComponent {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    return (
      <DefaultLayout>
        {this.props.id}
        <div style={styles.wrapper}>
          <h1>About</h1>
        </div>
      </DefaultLayout>
    );
  }
}

export default withRouter(About);
