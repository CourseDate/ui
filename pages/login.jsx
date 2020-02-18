import React from 'react';
import {GoogleLogin} from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

const login = () => {
    return(
        <GoogleLogin
            clientId="996394968992-rm1fqmg6kakboe98mntbmtd9imgralch.apps.googleusercontent.com"
            
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}




export default login;