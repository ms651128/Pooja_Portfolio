import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink="/Pooja_Portfolio/"  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/Pooja_Portfolio/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Education" tolink="/Pooja_Portfolio/education"  activec={this.activeitem}></Navitem>
            <Navitem item="Skills" tolink="/Pooja_Portfolio/skills"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/Pooja_Portfolio/contact"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    