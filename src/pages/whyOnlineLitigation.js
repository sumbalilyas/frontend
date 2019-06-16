import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/App.css';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Card, Menu, Switch, List } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class litigation extends Component {


  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>

        <div style={{ paddingLeft: '60px', paddingRight: '60px', paddingBottom: '20px' }}>
          <center>
            <p></p>
            <h1>Why Online Litigation?</h1>
            <p>It has been said that civil litigation is the “sport of kings.” Any lawsuit that falls outside the scope of the criminal realm is considered a civil lawsuit.
            These lawsuits encompass many diverse areas of law, including but not limited to, personal injury, wrongful death, divorce, employment law, toxic tort, product liability, medical malpractice, and intellectual property law.
            Unlike mediation, civil litigation is an ambitious endeavor that can be difficult and costly to pursue and not an expeditious road to travel toward an ultimate resolution.
            Civil litigation is the single most popular area of practice among attorneys, paralegals, ​law clerks, and other legal support staff.</p><p> Litigators represent individuals, large and small companies, and other entities and strive to provide competent legal services and zealous representation to their clients.
            Litigators often take cases from inception to a final verdict at a bench or jury trial. While litigation is one of the highest-paying legal practice areas, it is a passion for the work that keeps many litigators working in the litigation arena. Is the litigation field for you? Litigation allows for tremendous personal and career skills advancement, professional respect, excellent compensation and benefits, the potential for bonuses and a coveted seat in the front of the courtroom.
            If you are contemplating a career in litigation, these advantages of working in litigation can help you choose the right career path. Be sure to also review Part II of this article, the cons of litigation practice as well as The Role of the Litigation Attorney and The Role of the Litigation Paralegal.</p>
          </center>
        </div>

      </React.Fragment>
    )
  }
}

export default litigation;