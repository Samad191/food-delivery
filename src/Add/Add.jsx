import React, { Component } from 'react'
import Nav from '../Nav'

import { connect } from 'react-redux'

import { faVenusMars, faUserTie, faEnvelope, faSortNumericUpAlt, faUnlockAlt, faGlobeAsia, faFlag, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faKey } from '@fortawesome/free-solid-svg-icons'


class Add extends Component {

    state = { value: null }


    componentDidMount() {
        if(this.props.changeLogin.login === true ) {
            console.log('Ok')
        }
        else {
            alert('Cannot Access')
            this.props.history.push('/')
        }
    }

 
  
    render() {
        console.log(this.props.changeLogin.login)
        return (
            <div>
                <Nav />
                   
                <h1  >Add <span style={{color:'royalBlue'}} >Restaurant</span> </h1>
                        
                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'90px', marginTop:'15px'}} />
                    <input type="text"  />
                    
                    <label >Full Name</label>

                    </div>
                
                    <div className='input-field col s3' >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'90px', marginTop:'15px'}} />
                        <input  type='email'  />
                        <label >Email</label>
                        
                    </div>     
                </div>

                <div className='row' style={{marginLeft:'600px'}} >
                    <div className='input-field col s3' >
                        <input />
                        <label>Location</label>
                    </div>
                </div>

                <button onClick={this.getState} >Get</button> 

                <br/><br/><br/><br/>

                <input />
                <input />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps) (Add)