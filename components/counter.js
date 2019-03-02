import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';

import './style.less';

import { initStore } from '../rematch/store';
import withRematch from '../rematch/utils/withRematch';

const styles = {
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
  },
};

class Counter extends PureComponent {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  };

  render() {
    const { counter, increment, incrementAsync } = this.props;

    return (
      <Card title="Counter">
        <div style={styles.buttons}>
          <Button.Group size="large">
            <Button type="default" onClick={increment}>
              <Icon type="plus" />
              Increment
            </Button>
            <Button type="default" onClick={incrementAsync}>
              <Icon type="plus" />
              IncrementAsync
            </Button>
          </Button.Group>
        </div>
        {counter}
        <Input addonBefore="Current Value:" defaultValue="0" size="large" value={this.props.counter} disabled />
      </Card>
    );
  }
}

const mapState = state => ({
  counter: state.counter
})

const mapDispatch = ({ counter: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementBy: amount => () => increment(amount),
  incrementAsync: () => incrementAsync(1)
})

export default withRematch(initStore, mapState, mapDispatch)(Counter);
