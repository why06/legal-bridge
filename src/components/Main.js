import React, { Component } from 'react';
import '../App.css';
import '../css/main.css';

var orgs = [
  {title: 'Memphis Area Legal Services', blurb: 'MALS provides free legal assistance on legal in Fayette, Lauderdale, Shelby, Tipton'},
  {title: 'Tennessee Alliance for Legal Services', blurb: 'TALS is state wide non-profit organization advancing collaboration among providers of legal services for the common good'},
  {title: 'Legal Aid Society of Middle Tennessee', blurb: 'LAS advanced defend and enforce legal rights of low-income and poor people inorder to secure them the basic neccessitites of life'}
];

class Main extends Component {
    renderCards(){
      var rows = [];
        orgs.forEach(elem => {
          rows.push(this.renderOrgCard(elem.title, elem.blurb))
       });
       return rows;
    }

    renderOrgCard(headtext, subheadtext){
      console.log("wee");
      return(
        <div className="org-card">
          <h4>{headtext}</h4>
          <p>{subheadtext}</p>
        </div>
      )
    }
    render(){
        return(
          <div className="App">
            <header className="main-header">
              <h1 className="App-title">Legal Bridge</h1> 
              <p className="main-intro">
                An app to connect clients to legal help
              </p>
            </header>
            <div className="cardbox">
              { this.renderCards()}
            </div>
          </div>
        )
    }
}

export default Main;