import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/main_page.css'

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {showElement : "employer"};
    this.showEmployer = this.showEmployer.bind(this);
    this.showEmployee = this.showEmployee.bind(this);
    this.showElement = this.showElement.bind(this);
  }

  showEmployer() {
    this.setState({showElement:"employer"});
  }

  showEmployee() {
    this.setState({showElement:"employee"});

  }

  showElement() {
    if(this.state.showElement === "employer") {
      return (
        <div className="employer">
          <div className="box box-right">
            <h2 className="box-header">Looking for an employee ?</h2>
            <ul className="box-ul">
              <li>Specify the industry</li>
              <li>Specify your requirements</li>
              <li>Choose your new employee</li>
            </ul>
            <Link to="/newOffer" className="btn btn-success btn-lg">Post a job offer</Link>
          </div>
          <img className="img-employer img-medium" src={require(`./images/employer2.png`)} alt="employer"/>
          <img className="img-employer img-small" src={require(`./images/employer3.png`)} alt="employer"/>
        </div>
      );
    } else if ( this.state.showElement === "employee") {
      return (
        <div className="employee">
          <div className="box box-left">
            <h2 className="box-header">Looking for a job ?</h2>
            <ul className="box-ul">
              <li>Choose your industry</li>
              <li>Choose from hundreds offers</li>
              <li>Find your dream job</li>
            </ul>
            <Link to="/offers" className="btn btn-success btn-lg">Find a job</Link>
          </div>
          <img className="img-employee img-medium" src={require(`./images/employee2.png`)} alt="employee"/>
          <img className="img-employee img-small" src={require(`./images/employee3.png`)} alt="employee"/>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="section-intro">
          <h1 className="title">Title</h1>
          <p className="desc">Looking for a dream job, or maybe you want to hire a new employee ? </p>
        </div>
        <div className="mobile-select-navigation">
          <div className="row">
            <div className={"col-6 navigation-tab " + (this.state.showElement === "employer" ? 'active-tab' : '' )} onClick={this.showEmployer}>
              Employer
            </div>
            <div className={"col-6 navigation-tab " + (this.state.showElement === "employee" ? 'active-tab' : '' )} onClick={this.showEmployee}>
              Employee
            </div>
          </div>
          {this.showElement()}
        </div>
        <div className="section-job-wrapper">
          <div className="section-job">
            <div className="box box-left">
              <h2>Looking for an employee ?</h2>
              <ul className="box-ul">
                <li>Specify the industry</li>
                <li>Specify your requirements</li>
                <li>Choose your new employee</li>
              </ul>
              <Link to="/newOffer" className="btn btn-success btn-lg">Post a job offer</Link>
            </div>
            <div className="box box-right">
              <h2>Looking for a job ?</h2>
              <ul className="box-ul">
                <li>Choose your industry</li>
                <li>Choose from hundreds offers</li>
                <li>Find your dream job</li>
              </ul>
              <Link to="/offers" className="btn btn-success btn-lg">Find a job</Link>
            </div>
            <img className="img-people" src={require(`./images/people2.png`)} alt="people"/>
          </div>
        </div>
        <div className="section-industries">
          <h2 className="industries-header">No matter who you are !</h2>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="carousel-container">
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} width="96%">
                  <div>
                    <img src={require(`./images/IT.jpg`)} alt="IT"/>
                    <p className="caption">Information technology</p>
                  </div>
                  <div>
                    <img src={require(`./images/Administration.png`)} alt="Administration"/>
                    <p className="caption">Office administration</p>
                  </div>
                  <div>
                    <img src={require(`./images/gastronomy.jpeg`)} alt="IT"/>
                    <p className="caption">Gastronomy</p>
                  </div>
                  <div>
                    <img src={require(`./images/logistics.jpg`)} alt="IT"/>
                    <p className="caption">Logistics</p>
                  </div>
                  <div>
                    <img src={require(`./images/education.jpg`)} alt="IT"/>
                    <p className="caption">Education</p>
                  </div>
                  <div>
                    <img src={require(`./images/architecture.jpg`)} alt="IT"/>
                    <p className="caption">Architecture</p>
                  </div>
                  <div>
                    <img src={require(`./images/finance.jpg`)} alt="IT"/>
                    <p className="caption">Finance and Accounting</p>
                  </div>
                  <div>
                    <img src={require(`./images/many-more.jpg`)} alt="IT"/>
                    <p className="caption">... and many more.</p>
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 industries-info">
              <p>
              Looking for an intership or first job ?
              <br />
              Are you a specialist who plan to change company ?
              <br />
              Maybe you are looking for a job in a new industry ?
              </p>
              <p> Choose from a variety of offers from different industries that we have to offer, everyone will find something that will fully meet his expectations. </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
