import React, { Component} from 'react'
import Nav from '../Nav'

import { BrowserRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer'

import A from './download.jpeg'
import B from '../assets/1.jpeg'
import C from '../assets/2.jpeg'
import D from '../assets/4.jpeg'
import E from '../assets/5.jpeg'
import F from '../assets/6.jpeg'
import G from '../assets/7.jpeg'
import H from '../assets/9.jpeg'
import I from '../assets/11.jpg'


import Cart from './Cart'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHamburger } from '@fortawesome/free-solid-svg-icons'

class DashBoard extends Component {

     
    render() {

        const styleButton = {
            marginLeft : '100px'
        }
        
        return(
            <div>
                <Nav />
                <br/>

            <div className='responsive' >

            <button className='btn' style={{styleButton}} >BBQ</button>
            <button className='btn' >Chinese</button>
            <button className='btn' >Burger</button>

                <div className='row' >

                {this.props.rootReducer.map((re) => {

                {/* {this.props.restaurantReducer.map((re) => { */}
                     
                    return (
                        
                    <div className='col s3' style={{padding:'15px'}} key={re.id} >
                        
                        <div className='card light-blue lighten-5'  >
                            <div className='card-image' onClick={() => console.log(re.id) } >
                            
                                 <Link to={`dashboard/${re.id}`}  > 
                                    <img src={re.image} style={{height:'170px', width:'327px'}} /> 
                                 </Link> 
                                
                            </div>
                            <div className='card-content' >
                                
                                <p> {re.name} </p>
                            </div>
                            <div className='card-action' >
                            <a href={re.link} target='_blank'  >Visit Site</a>
                                  
                            </div>
                        </div>
                </div>
                
                    )
                })}
                <br />
                </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps) (DashBoard)