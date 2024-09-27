
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// } 




// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )


const anotherUser = " Learn React with Me"

const reactElement = React.createElement (
  //predefined syntax :: expected paramemters

  'a',                                                   // tag  
  {href: 'https://google.com',target: '_blank'},        // object
  'click to visit google',                             // text
  anotherUser                                         // variable inject
)




ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <App />
  reactElement

  
)
