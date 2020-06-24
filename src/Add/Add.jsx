import React, { Component } from 'react'
import Nav from '../Nav'

import { connect } from 'react-redux'

import { faVenusMars, faUserTie, faEnvelope, faSortNumericUpAlt, faUnlockAlt, faGlobeAsia, faFlag, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faKey } from '@fortawesome/free-solid-svg-icons'
import { $CombinedState } from 'redux'

import Dropdown from '../Dropdown'


class Add extends Component {

    state = 
    { 
        resName: '', 
        location: '',
        link: '',
        items:[]
    
    }

    componentDidMount() {
        if(this.props.changeLogin.login === true ) {
            console.log('Ok')
        }
        else {
            alert('Cannot Access')
            this.props.history.push('/')
        }
    }


    setResName = (e) => {
        this.setState({ resName: e.target.value})
    }

    setFoodName = (e) => {
        this.setState( prevState => ({
            items:{
                name: e.target.value
            }
        }) )
    }


    setLocation = (e) => {
        this.setState({ location: e.target.value })
    }

    setLink = (e) => {
        this.setState({ link: e.target.value })
    }



    render() {

       
        return (
            <div>
                <Nav />
                   
                <h1  >Add <span style={{color:'royalBlue'}} >Restaurant</span> </h1>
                        
                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'150px', marginTop:'15px'}} />
                    <input type="text"  />
                    
                    <label >Restaurant Name</label>

                    </div>
                   
                </div>

                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'90px', marginTop:'15px'}} />
                    <input type="text"  />
                    
                    <label >Food</label>

                    </div>
                
                    <div className='input-field col s3' >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'90px', marginTop:'15px'}} />
                        <input type='number'   />
                        <label >Price</label>
                        
                    </div>     
                </div>
                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'90px', marginTop:'15px'}} />
                    <input type="text"  />
                    
                    <label >Food</label>

                    </div>
                
                    <div className='input-field col s3' >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'90px', marginTop:'15px'}} />
                        <input type='email' type='number'   />
                        <label >Price</label>
                        
                    </div>     
                </div>



                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'90px', marginTop:'15px'}} />
                    <input type="text" />
                    
                    <label >Location</label>

                    </div>
                
                    <div className='input-field col s3' >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'90px', marginTop:'15px'}} />
                        <input  type='text' />
                        <label >Link</label>
                        
                    </div>     
                </div>        
                <p>
            <label>
                <input name="group1" type="radio" checked />
                <span>Red</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" type="radio" />
                <span>Yellow</span>
            </label>
            </p>
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps) (Add)