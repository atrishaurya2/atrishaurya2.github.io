import React from 'react';
import './App.css';
import ProjectList from './components/projectList'
import Bio from './components/bio'
import dp from './images/dp.png'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {}
    }

    scrollToTop = () => {
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      })
    }
    
  
  render(){
    return(
      <div id='box'>
        <Navbar/>
        <img src = {dp} id='dp'></img> 
        <h1>Hi! I am Shaurya Atri</h1>
        <span id='myDetails1'> web developer </span><span id='myDetails2'>| technophile </span><span id='myDetails3'>| sports enthusiast </span>
        <hr/>
        <button id='scrollToTop' onClick={this.scrollToTop}>top</button>
        <Bio/>
        <ProjectList/>
        <Footer/>
      </div>
    )
  }
}


