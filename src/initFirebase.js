import firebase from 'firebase';

    const firebaseConfig = {
        apiKey: "AIzaSyCiRP5NubrqYwMycorU9OXc00Cll6zK3f8",
        authDomain: "origo-pinkill.firebaseapp.com",
        databaseURL: "https://origo-pinkill.firebaseio.com",
        projectId: "origo-pinkill",
        storageBucket: "",
        messagingSenderId: "922445242707",
        appId: "1:922445242707:web:24627eeb0b940ef085c1a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase; 
