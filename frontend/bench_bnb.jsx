import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
    window.signin = APIUtil.signin;
    window.signup = APIUtil.signup;
    window.signout = APIUtil.signout;

});
