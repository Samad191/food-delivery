import React, { Component } from 'react'
import { connect } from 'react-redux'
import {isLogin} from '../actions/index'
import Nav from '../Nav'

class Logout extends Component {

    handleLogout = () => {
         
        this.props.isLogin(false)
        console.log('You have successfully Logged Out')
        this.props.history.push('/')
        
    }

    render() {
        return (
            <div>
                <Nav />
                Logout
                {console.log(this.props)}
         
                <button className='btn orange' onClick={this.handleLogout} >LogOut</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {isLogin} ) (Logout)