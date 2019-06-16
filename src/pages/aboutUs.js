import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/App.css';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Card, Menu, Switch, List } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class aboutUs extends Component {


  render() {
    
    return (
      <React.Fragment>

        <div style={{ paddingLeft: '60px', paddingRight: '60px', paddingBottom: '20px' }}>
          <center>
            <p></p>
            <h1>About Us</h1>
            <p>Welcome to Online Litigation System. Where we provide technology for online litigation.
              Litigation begins the moment someone decides to formally enforce or defend his or her legal rights.
              In most cases, this happens the moment a party hires an attorney to represent their interests. Most attorneys engage in a variety of “pre-suit” litigation activities. These can include many things, from writing a letter on a client’s behalf called a demand letter, to demand that a party compensate a victim for economic or physical injury, to filing a Notice of Eviction with a local court.
              Pre-suit litigation is subject matter specific and varies depending on the circumstances surrounding a particular case.
              However, there are several steps in litigation that occur in nearly every case.
              The first step in any litigation is investigation. Litigation is meaningless without information about the harm that occurred. Attorneys, and parties, often conduct extensive independent investigations into the facts and potential outcomes of a particular case prior to filing suit. A thorough pre-suit investigation focuses the issues in the case and satisfies the wronged party and his attorney that the harm was indeed caused by the potential defendant and that the law provides for a remedy. Knowing the facts of what occurred and how and why the law provides a remedy allows the wronged party to present the case to the party who caused the harm effectively. It is also the beginning of the wronged party's preparation to present the facts and law to a court of law.
              </p><p>
              This project titled as "Online Litigation System" aims to helps clients and lawsuits to help reach each other better by providing ways of communication and providing a platform which has a lot of data about lawsuits.
              The main idea is to have as many users on website as possible. The client and the lawsuit can register on the website and can communicate with each other via the web or the mobile version of the app.
              The resources can be accessed easily anytime anywhere via the web app or the mobile version of the app. The lawsuit can make a whole profile about his/her career and can also lookup other lawsuits.
              The lawsuit can also bid on cases filed by clients on the online web portal easily. The client on the other hand can easily find the best lawsuit for his/her specific needs and at the best monetary value on the app and can also communicate using the application.
              The main stakeholders of this app will be general public and lawsuits that can take advantage of the app.</p>
          </center>
        </div>
      </React.Fragment>
    )
  }
}



export default aboutUs;
