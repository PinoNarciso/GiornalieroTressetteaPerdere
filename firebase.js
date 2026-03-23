const firebaseConfig = {
  apiKey: "AIzaSyBSqc3y7CdmdsW86c5ZXPmnKOIdwcaJSTM",
  authDomain: "giornaliero-tressetteaperdere.firebaseapp.com",
  databaseURL: "https://giornaliero-tressetteaperdere-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "giornaliero-tressetteaperdere",
  storageBucket: "giornaliero-tressetteaperdere.firebasestorage.app",
  messagingSenderId: "630006722305",
  appId: "1:630006722305:web:8c09a17747edaab5fc7500"
};

// ✅ VERSIONE CORRETTA (compat)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();