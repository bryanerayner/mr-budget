import { AuthProviders, AuthMethods } from 'angularfire2';

export const FirebaseConfig = {
    apiKey: "AIzaSyAiDofnJA_pRdedkuPncIJ7Qh1KnGLZ8Ss",
    authDomain: "mr-budget-5e7f3.firebaseapp.com",
    databaseURL: "https://mr-budget-5e7f3.firebaseio.com",
    storageBucket: "mr-budget-5e7f3.appspot.com",
    messagingSenderId: "453235771503"
};

export const FirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
};

export const AuthConfigGoogle = FirebaseAuthConfig;

export const AuthConfigFacebook = {
    provider: AuthProviders.Facebook,
    method: AuthMethods.Redirect
};