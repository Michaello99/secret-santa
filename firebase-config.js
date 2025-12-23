// Skopiuj swój config z Firebase → Project Settings → Web App
// https://firebase.google.com/docs/web/setup
const firebaseConfig = {
  apiKey: "AIzaSyCDf_v9Y0PaSS-Y42rdjNiMfRUxIZxIjMI",
  authDomain: "secret-santa-f9d10.firebaseapp.com",
  projectId: "secret-santa-f9d10",
  storageBucket: "secret-santa-f9d10.firebasestorage.app",
  messagingSenderId: "50168264008",
  appId: "1:50168264008:web:0f680ef909946c42952f7d",
  measurementId: "G-SB6V98XBBQ"
};

// Inicjalizacja Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();