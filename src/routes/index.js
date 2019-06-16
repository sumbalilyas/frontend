import React from 'react';
import { Route, Switch } from 'react-router';

import container from '../containers/homeContainer';

import Login from '../pages/login';
import Register from '../pages/register';
import ContactUs from '../pages/contactUs';
import AboutUs from '../pages/aboutUs';
import OnlineLitigation from '../pages/whyOnlineLitigation';
import PrivacyPolicy from '../pages/privacyPolicy';

export const renderRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={ props => <AppRoute Layout={container} Component={Login} props={props} /> } />
        <Route exact path="/register" render={ props => <AppRoute Layout={container} Component={Register} props={props} />} />
        <Route exact path="/contactUs" render={props => <AppRoute Layout={container} Component={ContactUs} props={props} />} />
        <Route exact path="/aboutUs" render={props => <AppRoute Layout={container} Component={AboutUs} props={props} />} />
        <Route exact path="/whyOnlineLitigation" render={props => <AppRoute Layout={container} Component={OnlineLitigation} props={props} />} />
        <Route exact path="/privacyPolicy" render={props => <AppRoute Layout={container} Component={PrivacyPolicy} props={props} />} />
      </Switch>
    </div>
  )
}

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <header {...props} />
        <Component {...props} />
      </Layout>
    );
  } else if (!Component) {
    return <Layout {...props} />;
  } else {
    return <Component {...props} />;
  }
};
