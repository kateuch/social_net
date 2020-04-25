import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field component={"input"} placeholder={"Login"} name={"login"}/> 
        </div>
        <div>
            <Field component={"input"} placeholder={"Password"} name={"password"}/>
        </div>
        <div>
            <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> Remember me
        </div>
        <div>
            <button type="submit">Login</button>
            </div> 
    </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const submitData = (values) => {
        console.log(values);
    }

    return (
        <div>
            <h1>Login</h1>
             <LoginReduxForm onSubmit={submitData}/>
        </div>
)}

export default Login