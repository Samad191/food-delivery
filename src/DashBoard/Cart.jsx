import React, { Component } from 'react'
import A from './download.jpeg'

import { connect } from 'react-redux'
// import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = { totalAmount: 100 , show:false}
    }

    pushRoute = () => {
      alert('Thank u for ordering.')
      this.setState({show:true})
      window.location.href = '/'
    }
    
    render() {
      
      console.log(this.props)
        return (
          <div>
            <br />
            {/* {this.state.show ? <a href='/' > <button className=' btn indigo' >Home Page</button> </a> : null }
           */}
            <div style={{marginLeft:'200px',padding:'20px'}} >
            <div class="row">
            <div class="col s12 m10">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title ">Cart</span>
                  <i class="material-icons" style={{color:'yellow'}}>shopping_cart</i>


                  
                   <div> {this.props.food.map((foo)=> 
                        <div>
                            <p> {foo} </p>   
                          </div>     
                    )} </div>

                </div> 
                <div class="card-action">
                  <div className='row' >
                    <div className='col s7' >
                      
                   
                  {/* <a href="#"> <button className='btn' >Confirm Order</button> </a> */}
                 
                   <a> <button className=' btn orange' onClick={this.pushRoute} >Confirm Order</button> </a>                   
                    
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        )
    }
}

export default Cart