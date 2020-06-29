import React, { Component } from 'react'
import { Link,BrowserRouter  } from 'react-router-dom'
import { isLogin } from './actions'

import { connect } from 'react-redux'


class Nav extends Component{

    state = { signIn: false }

    componentDidMount() {
        this.setState({ signIn: this.props.signIn })
    }

    handleLogout = () => {
        this.props.isLogin(false)
        alert('You have successfully Logged Out')
       
    }

    render() {
        console.log(this.props)
        return(
            <div>   
                
                <nav>
                    
            <div className="nav-wrapper blue">
                
            <Link to='/' className="brand-logo" style={{marginLeft:'15px'}}  >XORD Food Services</Link>
            {/* <ul id="nav-mobile" className="right hide-on-med-and-down"> */}
            <ul id="nav-mobile" className="right ">

                {/* <BrowserRouter>

                    <Link to='/' >Home</Link>
                    <Link to='/register' >Register</Link>
                    <Link to='signin' >Sign In</Link>
                    <Link to='/add' >Add</Link>
                    <Link to='/logout' >LogOut</Link> */}
                
                <li><a href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/signin">Sign In</a></li>
                <li><a href='/add'>Add</a></li>
                {this.props.changeLogin ? <li><a onClick={this.handleLogout} href='/' >LogOut</a></li>
: null }
                
                {/* </BrowserRouter> */}
                
            
            </ul>
            </div>
        </nav>
     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {isLogin} ) (Nav)