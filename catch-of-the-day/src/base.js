import Rebase from 're-base'; //allows you to mirror our state to our fire base database
import firebase from 'firebase' //offical firebase pacakge


//firebase app
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyAE1UGpVgkZH3yxv7S3XZgIoJzjD1pNJu0",
    authDomain: "catch-of-the-day-dakir.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-dakir.firebaseio.com",
    // projectId: "catch-of-the-day-dakir",
    // storageBucket: "catch-of-the-day-dakir.appspot.com",
    // messagingSenderId: "891232745722",
    // appId: "1:891232745722:web:32e834375c804333673143",
    // measurementId: "G-4KR27MXSRT"
})
//firebase database
const base = Rebase.createClass(firebaseApp.database())


export {firebaseApp}

//default export below
export default base;