import React, { Component } from 'react';
import '../App.css';
import '../css/main.css';
import logo from '../logo.svg';

var orgs = [
  {title: 'Memphis Area Legal Services', blurb: 'MALS provides free legal assistance on legal in Fayette, Lauderdale, Shelby, Tipton'},
  {title: 'Tennessee Alliance for Legal Services', blurb: 'TALS is state wide non-profit organization advancing collaboration among providers of legal services for the common good'},
  {title: 'Legal Aid Society of Middle Tennessee', blurb: 'LAS advanced defend and enforce legal rights of low-income and poor people inorder to secure them the basic neccessitites of life'}
];

class Main extends Component {
    renderOrgCard(headtext, subheadtext){
      return(
        <div className="org-card">
          <span>${headtext}</span>
          <span>${subheadtext}</span>
        </div>
      )
    }
    render(){
        return(
          <div className="App">
            <header className="main-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <h1 className="App-title">Legal Bridge</h1> 
              <p className="main-intro">
                An app to connect clients to legal help
              </p>
            </header>
            <div>
              {
                orgs.forEach((elem) =>{
                  this.renderOrgCard(elem.title, elem.subheadtext);
                })
              }
            </div>
          </div>
        )
    }
}

export default Main;