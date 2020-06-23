import React, { Component } from 'react'
import Dropdown from './Dropdown'
import { Link, BrowserRouter } from 'react-router-dom'
import Nav from './Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faKey } from '@fortawesome/free-solid-svg-icons'

import { faVenusMars, faUserTie, faEnvelope, faSortNumericUpAlt, faUnlockAlt, faGlobeAsia, faFlag, faCity } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { userAction, addUser } from './actions/index'

// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";


class Register extends Component{

    state = 
    {
        userName: '', userEmail:'',
        userAge: '' , userCountry: '',
        userPassword: '', userConfirmPassword: ''
    }

   
    handleUserName = (e) => {
        this.setState({ userName: e.target.value })
    }

    handleUserEmail = (e) => {
        this.setState({ userEmail: e.target.value })
    }

    
    handleUserAge = (e) => {     
        this.setState({ userAge: e.target.value})
    }

    handleUserCountry = (e) => {
        this.setState({ userCountry: e.target.value })
    }

    handleUserPassword = (e) => {
        this.setState({ userPassword: e.target.value })
    }     

    handleUserConfirmPassword = (e) => {
        this.setState({ userConfirmPassword: e.target.value })
    }

    handleSubmit = (e) => {
       
        // e.preventDefault()
        this.props.addUser(this.state.userName, this.state.userPassword)
        
        
    }

   
    render() {
        console.log(this.props)
        return(
            <div >
                    <Nav />
                {/* <Link to = '/signin' className='waves-effect waves-light btn'  style={{marginLeft:'1150px', marginTop:'20px' }} >Sign In
            <FontAwesomeIcon style={{marginLeft:'10px'}} icon={ faSignInAlt} />  
            </Link> */}

            <div>
                <h4 style={{ marginLeft: '560px'}} >Register</h4>

            
          <div className="row" style={{marginLeft:'450px'}} >
                
                <div className="input-field col s3">
                <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'90px', marginTop:'15px'}} />
                <input value={this.state.userName} type="text"  onChange={(e) => this.handleUserName(e)} />
                
                <label >Full Name</label>

                </div>
                
                <div className='input-field col s3' >
                    <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'90px', marginTop:'15px'}} />
                    <input value={this.state.userEmail}  type='email' onChange={(e) => this.handleUserEmail(e) } />
                    <label >Email</label>
                    
                </div>
                
            </div>
          
            <div className="row" style={{marginLeft:'450px'}} >
                <div className="input-field col s3">
                <FontAwesomeIcon icon={faSortNumericUpAlt} style={{marginLeft:'60px', marginTop:'15px'}} />
                <input type="number"  onChange={ (e) => this.handleUserAge(e)} />
                
                <label >Age</label>
                </div>

                <div className='input-field col s3' >
                <FontAwesomeIcon icon={faGlobeAsia} style={{marginLeft:'150px', marginTop:'15px'}}/>
                    <input value={this.state.userCountry}  type='text'  onChange={ (e) => this.handleUserCountry(e) } />
                    <label >Country</label>
                </div>  
            </div>

            <div className="row" style={{marginLeft:'450px'}} >
                <div className="input-field col s3">
                <FontAwesomeIcon icon={faKey} style={{marginLeft:'90px', marginTop:'15px'}} />
                <input value={this.state.userPassword}  type="password"  onChange={(e) => this.handleUserPassword(e) }/>
                <label >Password</label>
                </div>

                <div className='input-field col s3' >
                <FontAwesomeIcon icon={faKey} style={{marginLeft:'150px', marginTop:'15px'}}/>
                {/* <i className='material-icons' style={{marginLeft:'150px', marginTop:'6px'}} >lock</i> */}
                    <input value={this.state.userConfirmPassword} type='password' onChange={(e) => this.handleUserConfirmPassword(e)} />
                    <label >Confirm Password</label>
                   
                </div>    
            </div> 

            {this.state.userPassword === this.state.userConfirmPassword? null: <p style={{color: 'red', marginLeft:'580px'}} >Passwords don't match</p> }           
            { this.state.userAge < 0 ? <p style={{color: 'red', marginLeft:'580px' }}  >Age not correct</p>  : null }
                        
            <br/><button className='btn waves-effect waves-light' onClick={this.handleSubmit} style={{marginLeft:'600px'}} >Submit <i class="material-icons right">send</i> </button><br/>
            <div>
            </div>
        </div>
          
           <br/>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,{addUser}) (Register)
