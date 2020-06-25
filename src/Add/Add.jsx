import React, { Component } from 'react'
import Nav from '../Nav'

import { connect } from 'react-redux'

import { faVenusMars, faUserTie, faEnvelope, faSortNumericUpAlt, faUnlockAlt, faGlobeAsia, faFlag, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faKey } from '@fortawesome/free-solid-svg-icons'
import {restaurantAction} from '../actions/index'

import B from '../assets/1.jpeg'
import C from '../assets/2.jpeg'
import D from '../assets/4.jpeg'
import E from '../assets/5.jpeg'
import F from '../assets/6.jpeg'
import G from '../assets/7.jpeg'
import H from '../assets/9.jpeg'
import I from '../assets/11.jpg'


class Add extends Component {

    state = 
    { 
        id: this.props.rootReducer.length + 1 ,
        resName: '', 
        
        foodFirst: '',
        priceFirst: null,
        
        foodSecond: '',
        priceSecond: null,
        
        location: '',
        image: '',
        
        link: '',
        

    }


    componentDidMount() {
        if(this.props.changeLogin.login === true ) {
            console.log('Ok')
        }
        else {
            alert('Cannot Access')
            this.props.history.push('/')
        }
    }

    setResName = (e) => {
        this.setState({ resName: e.target.value })
    }

    setFoodFirst = (e) => {
        this.setState({ foodFirst: e.target.value })
    }

    setPriceFirst = (e) => {
        this.setState({ priceFirst: e.target.value })
    }

    setFoodSecond = (e) => {
        this.setState({ foodSecond: e.target.value })
    }

    setPriceSecond = (e) => {
        this.setState({ priceSecond: e.target.value })
    }

    setImage = (e) => {
        this.setState({ image: e.target.value })
    }

    setLocation = (e) => {
        this.setState({ location: e.target.value })
    }

    setLink = (e) => {
        this.setState({ link: e.target.value })
    }

    handleSubmit = (e) => {
        let newRestaurant =  { id: this.state.id, name: this.state.resName, items:[{ name: this.state.foodFirst, price: this.state.priceFirst }, {name: this.state.foodSecond, price: this.state.priceSecond}], address: this.state.location, image: this.state.image, link: this.state.link  }
       
        let restaurantState = this.props.rootReducer
        
        restaurantState.push(newRestaurant)

        this.props.restaurantAction(restaurantState)

        alert('Thank U for Registration')

        this.props.history.push('/')
       
    }


    onChange = (e) => {
        let files = e.target.files
        // console.log('data files',files)

        let reader = new FileReader()
        reader.readAsDataURL(files[0])

        reader.onload = (e) => {
            console.warn('img data')
        }
    }

    imageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if(reader.readyState === 2) {
                this.setState({ image: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    // imageConsole = (e) => {
    //     let img = e.target.files[0];
    //     this.setState({
    //         image: URL.createObjectURL(img)
    //       });
    // }

 
    render() {
        
        return (
            <div>
               <Nav />
              
                <h1 >Add <span style={{color:'royalBlue'}} >Restaurant</span> </h1>
                        
                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'150px', marginTop:'15px'}} />
                    <input type="text" onChange={(e) => this.setResName(e) } />
                    <label >Restaurant Name</label>
                    </div>

                    {/* <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'150px', marginTop:'15px'}} />
                    <input type="text" onChange={(e) => this.setImage(e) } />
                    <label >Image </label>
                    </div> */}
                   
                </div>

                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'90px', marginTop:'15px'}} />
                    <input type="text" onChange={(e) => this.setFoodFirst(e) } />
                    
                    <label >Food</label>

                    </div>
                
                    <div className='input-field col s3' >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'90px', marginTop:'15px'}} />
                        <input type='number' onChange={(e) => this.setPriceFirst(e) }   />
                        <label >Price</label>
                        
                    </div>     
                </div>
                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'90px', marginTop:'15px'}} />
                    <input type="text" onChange={(e) => this.setFoodSecond(e) } />
                    
                    <label >Food</label>

                    </div>
                
                    <div className='input-field col s3' >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'90px', marginTop:'15px'}} />
                        <input type='number' onChange={(e) => this.setPriceSecond(e) } />
                        <label >Price</label>
                        
                    </div>     
                </div>



                <div className="row" style={{marginLeft:'450px'}} >
                
                    <div className="input-field col s3">
                    <FontAwesomeIcon icon={faUserTie} style={{marginLeft:'90px', marginTop:'15px'}} />
                    <input type="text" onChange={(e) => this.setLocation(e) } />
                    
                    <label >Location</label>

                    </div>
                
                    <div className='input-field col s3' >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:'90px', marginTop:'15px'}} />
                        <input  type='text' onChange={(e) => this.setLink(e)} />
                        <label >Link</label>
                        
                    </div>     
                </div>        

                
                <input type='file' name='image-upload' id='input' accept='image/*' onChange={this.imageHandler } />
                <div className='label' >
                    <label htmlFor='input' className='image-upload' >
                        <i className='material-icons' >add_photo_alternate</i>
                        Choose Your Photo
                    </label>
                </div>

                <button className='btn' onClick={this.handleSubmit} >SUBMIT</button>

                {/* <img src={this.state.image} style={{height:'200px', width:'300px'}} /> */}
                {/* <p>
            <label>
                <input name="group1" type="radio" checked />
                <span>Red</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" type="radio" />
                <span>Yellow</span>
            </label>
            </p> */}
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {restaurantAction} ) (Add)