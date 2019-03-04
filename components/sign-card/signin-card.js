import React from 'react';
import {Card} from 'fluantd';

import 'fluantd/lib/card/style/index.less';
import './style/index.less';

const classString = 'fluantd-card-signin';
const SigninCard = props => {
  return <Card {...props} className={classString} />;
};

const { Header, Body, Footer } = Card;
SigninCard.Header = Header;
SigninCard.Body = Body;
SigninCard.Footer = Footer;
export default SigninCard;
