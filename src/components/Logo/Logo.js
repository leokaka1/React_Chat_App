import React, { Component } from 'react'
import logoImg from '../../images/job.png'
import './Logo.css'

export default class Logo extends Component {
    render() {
        return (
            <div>
                <div className="logo-container">
                    <img src={logoImg} alt=""/>
                </div>
            </div>
        )
    }
}
