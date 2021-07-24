import axios from 'axios'

// We create a new axios instance
// This is like making a custom fetch()
// but we are saying each request should have this base URL
// e.g. API.request('/events') will actually be axios.request(`${process.env.REACT_APP_API_ENDPOINT}/events`)
export const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
})

// Here we are adding an interceptor
// (this is something that happens before a request goes out or response comes in)
// this one is on the request so it happens before you make a request 
API.interceptors.request.use(function (config)  {
  // First we check for an authToken in the localStorage (if it's there then that means the user is logged in)
  if (localStorage.getItem('authToken')) {
    // If it's there we automatically add it to the header of the request going out so the server knows we are logged in
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`
  }
  return config
})

// Same as above but this one intercepts any responses coming to us
API.interceptors.response.use(function (response) {
  let token = response.data?.authToken

  // We first check if the response has an authToken
  if(token){
    // If it does we automatically save it in the local storage for use later
    localStorage.setItem('authToken', token, { expires: 1/24 })
  }
  return response 
})

// We return our custom axios instance for use
export default API

// HOW TO USE
// import API from '../../helpers/api'

// API.request('/events', { data: {event_type: 'inspection', datetime: '2021-07-30 13:00'} })