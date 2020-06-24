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
   
    { id:'1' , name:'Kababjees' ,items:[{ name : "kabab" , price : 100 },{name : "golakabab", price :  200}] , address: 'Gulsan', image:A , link:'http://kababjees.com/' },
    { id:'2' , name:'California Pizza' ,items:[{name:'Chinese', price:400},{name:'Burger', price:200}] , address: 'Defence', image:B, link:'https://www.californiapizza.com.pk/'},
    { id:'3' , name:'PizzaHut' ,items:[{name:'Chinese', price:400},{name:'Burger', price:'200'}] , address: 'Jauhar', image:C, link:'https://www.pizzahut.com.pk/'},
    { id:'4' , name:'BurgerLAB' , items:[{name:'Chinese', price:400},{name:'Burger', price:'200'}] ,address: 'Clifton', image:D, link:'https://burgerlab.com.pk/' },
    { id:'5' , name:'Shinwari' ,items:[{name:'Chinese', price:400},{name:'Burger', price:'200'}], address: 'Gulsan', image:E, link:'https://burgeroclock.com.pk/' },
    { id:'6' , name:'KFC' ,items:[{name:'Chinese', price:600},{name:'Burger', price:'200'}], address: 'Defence', image:F, link:'https://www.kfcpakistan.com/' },
    { id:'7' , name:'Hardees' ,  items:[{name:'Chinese', price:450},{name:'Burger', price:'200'}] ,address: 'Jauhar',image:G, link:'https://www.hardees.com/'},

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

const addRestaurant = (state = initState ,action) => {
    switch(action.type) {
        case 'ADD_RESTAURANT': {
            return ({
                ...state,
                // id: action.payload.id,
                name: action.payload.resName,
                
            })
        }
    }
}


export default combineReducers({
    rootReducer,
    userReducer,
    changeLogin
})