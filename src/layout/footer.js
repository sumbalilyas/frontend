import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/App.css';

class myFooter extends Component {



  render() {
    return (
      <div>
        {/* Footer Starts Here */}
        <div class="row">
          <hr></hr>
          <div class="column">About
          <hr></hr>
            <p></p>
            <p>Want to know who we are? Just follow this <NavLink to='/aboutUs'>link.</NavLink></p>
          </div>
          <div class="column">Our Services
          <hr></hr>
            <p></p>
            <p>
              Case Filling
            </p>
            <p>
              Online Bidding
            </p>
            <p>
              Online Litigation
            </p>
          </div>
          <div class="column">Care Center
          <hr></hr>
            <p></p>
            <p>Follow this <NavLink to='/contactUs'>Link</NavLink> to contact us anytime.</p>
          </div>
          <div class="column">Privacy Policy
          <hr></hr>
            <p></p>
            <p>Visit this <NavLink to='/PrivacyPolicy'>Page</NavLink> to about our privacy policy</p>

          </div>
          <div id="meta-links"><hr></hr>Copyright © 2018. All Rights Reserved. <hr></hr></div>
        </div>
        {/* Footer Ends Here */}
      </div>
    )
  }
}

export default myFooter;
