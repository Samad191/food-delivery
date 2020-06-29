import React, { Component } from 'react';
import './App.css';
import Register from './Register'
import Nav from './Nav'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignIn from './signIn/SignIn'
import DashBoard from './DashBoard/DashBoard'
// import Food from './Food/Food'
import Restaurant from './DashBoard/Restaurant/Restaurant'
import Add from './Add/Add'


import Footer from './Footer/Footer'

import { connect } from 'react-redux'
import Logout from './Logout/Logout';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class App extends Component{
  render() {
    return(

      <div className="App" style={{backgroundColor:'azure'}} > 
      
      <BrowserRouter>
        <Switch>
        <Route path='/' exact component={DashBoard} />

        <Route path='/register' exact component={Register} />

        <Route path='/dashboard/:id' exact component={Restaurant} />

        <Route path='/signin' exact component={SignIn}  />

        <Route path='/add' exact component={Add} />
{/* 
        <Route path='/logout' exact component={Logout} /> */}
   
        {/* <Route path='/food' exact component={Food} /> */} 
          
        </Switch>
      </BrowserRouter>

      <Footer/>
      

    </div>
    
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps) (App);