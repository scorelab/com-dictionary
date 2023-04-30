import React, {useEffect, useState} from "react";
import "./ForgotPassword.css"

const ForgotPassword = () => {

    return (
        <div className="cover">
            <h1>Password Reset</h1>
            <input type="emailId" placeholder="Register Email" />

            <div className="login-btn" >Submit</div>
            
        </div>
    )
}

export default ForgotPassword