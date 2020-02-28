import React, { useState } from 'react';
import {GoogleLogin} from 'react-google-login';

const url = ''

async function postData(url, options) {
    const response = await fetch(url, options)
    return await response.json()
}

const responseGoogle = (response) => {
    let tokenId = response.tokenId
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(tokenId)
    }
    postData(url, options)
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