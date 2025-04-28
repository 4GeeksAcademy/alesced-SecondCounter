import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondCounter from './components/SecondCounter';

let time = 0;

function counter(){
ReactDOM.createRoot(document.getElementById('root')).render(<SecondCounter  seconds={time} />)
time++
}

setInterval(counter, 1000);