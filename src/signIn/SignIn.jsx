import React, { Component } from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHamburger } from '@fortawesome/free-solid-svg-icons'
// import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'

import Nav from '../Nav'
import Footer from '../Footer/Footer'

import { isLogin }from '../actions/index'

import { connect } from 'react-redux'


class SignIn extends Component {

  state = { name:'', password:'', match:false, match2:false, signIn: false }

  handleUserName = (e) => {
    this.setState({ name: e.target.value })
    
  }

  handleUserPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  checkUser = () => {
    
    if(this.props.userReducer.name === this.state.name && this.props.userReducer.password === this.state.password) {
      this.setState({match:true, signIn: true})
      alert('You have successfully signed In')
      this.props.isLogin(true)
      window.location.href = '/add'
    }

    else  { 
    this.setState({match2: true})
    alert('Invalid User')
    }

   
      
  }  

  
    render() {
      console.log(this.props)
      
      // console.log(this.props.location)
        return (
          <div>
            
              <Nav signIN={this.state.signIn} />
                <h4 style={{marginLeft:'590px'}} >Sign In</h4>

            <div >
              <div class="col s12" style={{marginLeft:'500px'}} autoComplete='off'  >
                <div class="row">
                  <div class="input-field col s5">
                  <i class="material-icons prefix">account_circle</i>
                    <input id="input_text" type="text" onChange={(e) => this.handleUserName(e)} />
                    <label for="input_text">Name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s5">
                  <i class="material-icons prefix">vpn_key</i>
                    <input id="input_text2" type="password" onChange={(e) => this.handleUserPassword(e)} />
                    <label for="input_text2">Password</label>
                  </div>
                </div>
              </div>
            </div>

                 {/* {this.state.match ? <h4>User is valid</h4>: null} 
                 {this.state.match2 ? <h4>User is not valid</h4>: null}
   */}
      <button onClick={this.checkUser} class="waves-effect waves-light btn" type='submit' style={{marginLeft:'600px'}} >Submit</button>
            
        <br/><br/><br/><br/><br/><br/><br/>

        </div>
            
        )
    }
}

const mapStateToProps = (state) => {
  return state
}

// const mapDispatchToProps = (dispatch) => {
//     return ({
//       signIn: (login) => {
//         dispatch(isLogin(login))
//       }
//     })
// }


export default connect(mapStateToProps, {isLogin}) (SignIn)