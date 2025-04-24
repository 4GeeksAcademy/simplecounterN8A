import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';

let time = 0

function counter(){
ReactDOM.createRoot(document.getElementById('root')).render(<SecondsCounter seconds={time} />) // 0
time++
}
setInterval(counter, 1000)