import React from 'react'
import Form from '../../../components/Mobile/Forms'
<<<<<<< Updated upstream
export const Login = () => {
    return (
        <div>
           <Form placeholder1="Email" placeholder2="email"/>
        </div>
=======

import Button from '../../../components/Mobile/Button'
import logo from '../../../assets/GotNotes.jpg'
import "./styles.scss"
import {NavLink, Redirect} from 'react-router-dom'



export const Login = () => {

        return (

            
            <div className = "whole">
                <img src = {logo} className="image"  />
                <h2 className = "login">  Login</h2>
                <div>
            <text enableBackground= "false"> Don't have an account? </text>
            <text>
            <a href = "/signup"><Button text = "Sign up"/> </a>
            </text>
            </div>
            <div className = "reset">
            <NavLink to="/resetpass" >
            <Button text = "Reset Password"/> 
            </NavLink>
            </div>
            <Form placeholder1="Email" placeholder2="Password" />
            
            
            
            </div>
>>>>>>> Stashed changes
    )
}

