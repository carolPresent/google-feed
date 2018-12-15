const {google} = require('googleapis');

const googleConfig = {
    clientId: '195776256689-t8nm0b0jh6a18lh45f0v7gg1kphf298n.apps.googleusercontent.com',
    clientSecret: 'j6k_Pk78T69PysWkx6UCLrH7',
    redirect: 'https://googlefeed.herokuapp.com/',
};

const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
];

function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}

function getGooglePlusApi(auth) {
    return google.plus({ version: 'v1', auth });
}

function urlGoogle() {
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
}

async function getGoogleAccountFromCode(code) {
    const auth = createConnection();
    const data = await auth.getToken(code);
    const tokens = data.tokens;
    auth.setCredentials(tokens);
    const plus = getGooglePlusApi(auth);
    const me = await plus.people.get({ userId: 'me' });
    const userGoogleId = me.data.id;
    const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
    return {
        id: userGoogleId,
        email: userGoogleEmail,
        tokens: tokens,
    };
}

module.exports={
    UrlGoogle:urlGoogle,
    GetGoogleAccountFromCode:getGoogleAccountFromCode
}