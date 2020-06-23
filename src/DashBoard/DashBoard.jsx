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

    state = 
    { 
        dish: '',
        buttons:['BBQ', 'Chinese','FastFood'],
        images:['A','B','C','D','E','F','G'],
        value:A
    }


    changeBackground = (e) => {
        e.target.style.color = 'yellow'
    }

    returnBackground = (e) => {
        e.target.style.color= 'orange'
    }


    compareDish = (e) => {

    }

    // onInput = (e) => {
    //     console.log(e.target.value)
    //     console.log(this.props)
    //     // this.props.map((prop) => {console.log('hello')} )
    //     this.props.rootReducer.map((root) => root.dishes.map((dish) => console.log(dish) ))
        
    // }

    onSearch = (e) => {
        this.setState({ search : e.target.value })
    }

    
    
    render() {
        
        return(
            <div>
                <Nav />
                <br/>
{/* 
                <p style={{height:'500px', width:'1430px', backgroundColor:'black'}} > <img src={H} style={{height:'270px', width:'380px', marginTop:'50px'}} /> </p>
                <p style={{color:'white'}} >Hello</p> */}
{/* 
                <input onChange={(e) => this.onSearch(e)} /> */}

            <div className='responsive' >
              
                <div className='row' >

                
                {this.props.rootReducer.map((re) => {
                     
                    return (
                        
                    <div className='col s3' style={{padding:'15px'}} key={re.id} >
                        
                        <div className='card light-blue lighten-5'  >
                            <div className='card-image' onClick={() => console.log(re.id) } >
{/*                             
                                <img src={A} /> */}

                                 <Link to={`dashboard/${re.id}`}  > 
                                    <img src={re.image} style={{height:'170px', width:'327px'}} /> 
                                 </Link> 
                                
{/* 
                                <span className='card-title'  > Title </span> */}
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