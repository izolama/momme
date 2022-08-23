import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAegxzZbcMyluEkqERiiv0_7JzbmBdKYzk',
  authDomain: 'mommeapp-67e33.firebaseapp.com',
  databaseURL:
    'https://mommeapp-67e33-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'mommeapp-67e33',
  storageBucket: 'mommeapp-67e33.appspot.com',
  messagingSenderId: '784035050238',
  appId: '1:784035050238:web:8f508408eeec5b26762baf',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
