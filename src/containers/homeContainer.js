import React, { Component } from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';


class homeContainer extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    const { children } = this.props;
    return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
    )
  }
}

export default homeContainer;