import { PublicClientApplication } from "@azure/msal-browser";

const SSO_API_SCOPE = ""
const CLIENT_ID = ""
const TENANT_ID = ""

const msalConfig = {
    auth: {
        clientId: CLIENT_ID,
        authority: `https://login.microsoftonline.com/${TENANT_ID}`,
        redirectUri: 'http://localhost:8080'
        
    }
};

const loginRequest = {
    scopes: [SSO_API_SCOPE]
}

let msalInstance = null;

if (msalInstance === null) {
    msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.initialize();
}

export default {
    login() {
        return msalInstance.loginPopup(loginRequest);        
    },
    logout() {
        return msalInstance.logoutPopup();
    },
    getTokenPopup() {
        const request = {
            account: msalInstance.getAllAccounts()[0],
            scopes: [SSO_API_SCOPE]
        }
        return msalInstance.acquireTokenSilent(request)
    }
}
