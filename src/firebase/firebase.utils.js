import firebase  from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// memakai firebase/compat/app karena disarankan untuk menggunakan latest firebase

const config = {
  apiKey: 'AIzaSyBbp4MkcDCzl-6CkloHhYcl12Zv33BmKA4',
  authDomain: 'enig-db.firebaseapp.com',
  projectId: 'enig-db',
  storageBucket: 'enig-db.appspot.com',
  messagingSenderId: '836668772833',
  appId: '1:836668772833:web:842e39c0b882625a39c2a0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
