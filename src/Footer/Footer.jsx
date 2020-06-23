import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import {FaCcMastercard, FaFacebook, FaLinkedin} from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer blue-grey darken-2">
          <div class="container">
            <div class="row">
              <div class="col l4 s12"  >
                <h5 class="white-text">Powered by XORD</h5>
                <p class="grey-text text-lighten-4">Aspiring to build an honest world.</p>
              </div>
              <div class="col l4 s12">
                <h5 class="white-text">Visit Site</h5>
                <ul>
                <a href='https://xord.one/' target='_blank' class="grey-text text-lighten-3" >XORD</a>
                  <br/>
                <a href='http://xehen.ml/' target='_blank' class="grey-text text-lighten-3" >XEHEN</a>
                 
                </ul>
              </div>
              <div class="col l4 s12" >
              <h5 class="white-text">Get Connected</h5>
              
               <a href='https://www.linkedin.com/in/abdul-samad-59a631188/' target='_blank' > <FaLinkedin size={30} style={{color:'aqua', cursor:'pointer'}} /> </a>
               <a href='https://www.facebook.com/Xord.one' target='_blank' > <FaFacebook size={30} style={{color:'darkBlue', cursor:'pointer',marginLeft:'10px'}} /> </a>
              
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyright Text
            {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
            </div>
        )
    }
}
