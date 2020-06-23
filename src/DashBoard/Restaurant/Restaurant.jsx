import React, { Component } from 'react'
import Nav from '../../Nav'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// import { faBoxTissue } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import A from './download.jpeg'
import Cart from '../Cart'

class Restaurant extends Component {

    state = 
    {
        id: null,
        para: '',
        food: [],
        showButton: true,
        price: null ,
        count: 0
    }

    componentDidMount() {
        
        let id = this.props.match.params.id
      
        this.setState({ id })
   
    }

    handleClick = (e,price) => {
        // console.log(e)
        let foodList = this.state.food
        foodList.push(e)
       this.setState({
           food : foodList,
           price:price
       })
    }

    

    render() {
        console.log(this.props)
        return (
            <div >
                <Nav  />
                
                <div className='row' >
                    <div className='col s12' >
                        <div className=' col s6' >
                        
                     {/* <img src={A} style={{ width:'600px'}} />  */}
                     <img style={{padding:'30px', height:'270px', width:'380px'}} src={this.props.rootReducer[this.props.match.params.id-1].image} />
                

                </div> 
                {console.log(this.props.match.params.id)}
                
                <div className='col s6' > <Cart food={this.state.food} price={this.state.price} /> </div>
                </div>
                
                    <div className='col s12' >
                   
                    <div className='col s6'  >

                        {/* <Cart food={this.state.food} price={this.state.price} /> */}
                    </div>

                    <h2> {this.props.info} </h2>
                    <div   >
                    {this.props.rootReducer.map((prop) => {
                        
                        return (
                            prop.id === this.state.id?(
                                <div style={{marginLeft:'40px'}} >
                                     
                                        
                                        <h2>Name: {prop.name} </h2>
                                        <h4>Location: {prop.address} </h4>
                                    <div> {prop.dishes.map((dish) => <div>
                                            {/* {console.log(dish)} */}
                                        <div class="row">
                                        
                                            <div class="col s12 m5 ">
                                            <div class="card z-depth-4" >
                                                <div class="card-image">
                                                </div>
                                                <div class="card-content">
                                                <h4> {dish} </h4>
                                                {/* {prop.price.map((pric) => <p> {pric} </p> )} */}
                                                <p> {prop.price} </p>
                                                
                                                </div>
                                                <div class="card-action">
                                              
                                                
                                                <button className='btn' onClick={() => this.handleClick(dish, prop.price)} >Add To Cart</button>

                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        
                                    </div> )}  </div>
{/*                                     
                                        {console.log(this.props.rootReducer[0].link)} */}
                                    
                                    <br />
                                    <a href={prop.link} target='_blank' className='btn' style={{marginLeft:'34px'}} >Visit Site</a>
                                        
                                </div>
                                ):(null) 
                     )})
                    }
                    </div>
                        </div>   
                        </div>          
                </div>   
            
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null) (Restaurant)