import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import store from './store'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCCawmPd2XwEGfyvcFoyjlIMYz7JzKfitE",
    authDomain: "uni-ratings.firebaseapp.com",
    databaseURL: "https://uni-ratings-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uni-ratings",
    storageBucket: "uni-ratings.appspot.com",
    messagingSenderId: "955229751529",
    appId: "1:955229751529:web:a778c409c554eafc720878",
    measurementId: "G-48WXZSZB3T"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const universitiesCollection = db.collection('universities')
const teachersCollection = db.collection('teachers')
const reviewslikesCollection = db.collection('reviews')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  universitiesCollection,
  teachersCollection,
  reviewslikesCollection
}