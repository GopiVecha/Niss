import React from "react";

const Login = () => {
    return (
        <div>
         <h1>Please login here..</h1>
         <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" />
            <input type="submit">Submit</input>
         </form>
        </div>
    )
}

export default Login;