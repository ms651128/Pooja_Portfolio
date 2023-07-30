import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Computer Engineering , BE" where="Chandigarh University" from="July 2020" to="May 2023"/>
            <Widecard title="Computer Science And Engineering , Diploma" where="Chandigarh Polytechnic College" from="2017" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    