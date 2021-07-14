import firebase from 'firebase'

export const firebaseConfig = {
    apiKey: 'AIzaSyBzWhvJ1lxU_97VpUcBOirdd3nl4didw28',
    authDomain: 'momentum-4162f.firebaseapp.com',
    projectId: 'momentum-4162f',
    storageBucket: 'momentum-4162f.appspot.com',
    messagingSenderId: '856034490825',
    appId: '1:856034490825:web:673c87341a889fb0a01018',
    measurementId: 'G-BNBMBJDBFR',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
