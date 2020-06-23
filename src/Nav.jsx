import React, { Component } from 'react'
import { Link,BrowserRouter  } from 'react-router-dom'

import { connect } from 'react-redux'


class Nav extends Component{

    state = { signIn: false }

    componentDidUpdate() {
        this.setState({ signIn: this.props.signIn })
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
                
                <li><a href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/signin">Sign In</a></li>
                <li><a href='/add'>Add</a></li>
                
            
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

export default connect(mapStateToProps ) (Nav)