import firebase from 'firebase/compat/app'
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
}

// take users from object database firebase

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if not exist
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef

  // console.log(firestore.doc('users/12312312312'))

  // console.log(snapShot)
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
