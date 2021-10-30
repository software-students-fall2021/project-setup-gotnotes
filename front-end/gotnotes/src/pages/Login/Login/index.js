import React from 'react'
import Form from '../../../components/Mobile/Forms'

import Button from '../../../components/Mobile/Button'
import logo from '../../../assets/GotNotes.jpg'
import "./styles.scss"
<<<<<<< HEAD
import { ResetPass } from '../ResetPass'
import {Route,Switch, Router} from 'react-router-dom'

const ForgotPassword = () =>{
    // <Router>
    // <Switch>
    // <Route path="/resetpass" render={() => (
    //     <ResetPass />
    //   )} />
    //   </Switch>
    //   </Router>
    console.log("forgot password button working")
}

export const Login = () => {
    
    return (

        <div className = "whole">
            <h2 className = "login">  Login</h2>
            <img src = {logo} className="image"  />
           <Form placeholder1="Email" placeholder2="Password" />
           <Button text = "Forgot Password?" onClick = {ForgotPassword}/>


        </div>
=======
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
>>>>>>> Mark's_edits
    )
}

