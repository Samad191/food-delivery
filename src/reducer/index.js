import { combineReducers } from 'redux'

import A from '../assets/1.jpeg'
import B from '../assets/2.jpeg'
import C from '../assets/4.jpeg'
import D from '../assets/5.jpeg'
import E from '../assets/6.jpeg'
import F from '../assets/7.jpeg'
import G from '../assets/8.jpeg'
import SignIn from '../signIn/SignIn'


let initState =  
    
[
   
    { id:'1' , name:'Kababjees' , phone:'123',price:['Rs100', 'Rs200'], address: 'Gulsan', image:A , dishes: ['Biryani', 'Zinger'], link:'http://kababjees.com/' },
    { id:'2' , name:'California Pizza' , phone:'456',price:['Rs100', 'Rs200'], address: 'Defence', image:B, dishes: ['Chinese', 'Karahai'], link:'https://www.californiapizza.com.pk/'},
    { id:'3' , name:'PizzaHut' , phone:'789', price:['Rs100', 'Rs200'], address: 'Jauhar', image:C, dishes: ['Biryani', 'Chinese'], link:'https://www.pizzahut.com.pk/'},
    { id:'4' , name:'BurgerLAB' , phone: '000' , price:['Rs100', 'Rs200'],address: 'Clifton', image:D, dishes: ['BBQ', 'Zinger'], link:'https://burgerlab.com.pk/' },
    { id:'5' , name:'Shinwari' , phone:'123',price:['Rs100', 'Rs200'], address: 'Gulsan', image:E, dishes: ['BBQ', 'Karahai'], link:'https://burgeroclock.com.pk/' },
    { id:'6' , name:'KFC' , phone:'456',price:['Rs100', 'Rs200'], address: 'Defence', image:F,dishes: ['Biryani', 'Chinese'], link:'https://www.kfcpakistan.com/' },
    { id:'7' , name:'Hardees' , phone:'789', price:['Rs100', 'Rs200'],address: 'Jauhar',image:G,  dishes: ['BBQ', 'Zinger'], link:'https://www.hardees.com/'},

]

let userState = {
     
    name:'Samad', 
    password:'123'

}

let loginStatus = { 
    login: false
}


const rootReducer = (state = initState, action) => {
    switch(action.type) {   
        default: return state
    }
}

const userReducer = (state = userState,action) => {
    switch(action.type) {
        case 'ADD_USER': {
            return ({
                ...state, 
                name: action.payload.name, 
                password: action.payload.password,
                
            })
        }
        default: return state
    }
}

const changeLogin = (state = loginStatus, action) => {
    switch(action.type) {
        case 'SIGN_IN': {
            return ({ 
                login: action.payload
            })
        }
        default: return state
    }
}


export default combineReducers({
    rootReducer,
    userReducer,
    changeLogin
})