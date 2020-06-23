
export const userAction = (userInfo) => {
  return {
    type: 'GET_USER',
    payload: userInfo
  }
}

export const addUser = (name, password) => {
    return{
      type: 'ADD_USER',
      payload:{name,password}
    }
}

export const isLogin = (login) => {
  return{
    type: 'SIGN_IN',
    payload: login
  }
}
