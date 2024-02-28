import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: '<client-id>',
        authority: 'https://login.microsoftonline.com/<tenant-id>',
        redirectUri: 'http://localhost:8080'
    }
};

let msalInstance = null;

if (msalInstance === null) {
    msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.initialize();
}

export default {
    login() {
        return msalInstance.loginPopup({});        
    },
    logout() {
        return msalInstance.logoutPopup();
    }

}





