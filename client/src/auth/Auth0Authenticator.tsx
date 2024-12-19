import React from 'react'
import PropTypes from 'prop-types'
import { AppState, User, Auth0Provider } from '@auth0/auth0-react';

type Props = {
    children: React.ReactNode;
}

const Auth0Authenticator = ({ children }: Props) => {
    const domain ="dev-17a7be62tihqknfj.us.auth0.com";
    const clientId = "e7Qe9e9gSBkf32Psva4ajk0wYH0tW1Bh";
    const redirectUri = "http://localhost:5173";

    if(!domain || !clientId || !redirectUri){
        throw new Error('Missing Auth0 configuration variables');
    }

    const onRedirectCallback = (appState?: AppState, User?: User) => {
        console.log("User: ", User);
    };

    return(
        <Auth0Provider
        domain={domain}
        clientId={clientId} 
        authorizationParams = {{
        redirect_uri: redirectUri,
        }}
        onRedirectCallback = {onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
};

export default Auth0Authenticator
