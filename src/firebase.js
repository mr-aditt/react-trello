import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: `AIzaSyBjGB2dAv_ADDtc3HVSNjar11mTwuIAuIY`,
    authDomain: `auth-production-847f6.firebaseapp.com`,
    projectId: `auth-production-847f6`,
    storageBucket: `auth-production-847f6.appspot.com`,
    messagingSenderId: `655085165932`,
    appId: `1:655085165932:web:d3b5dd2fdc48d3af98a749`
});

export const auth = app.auth(); // Authentication instance
export default app;