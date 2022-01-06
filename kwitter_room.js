
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCWgHUy9g5EDURABZBUfXxNLSzz5_kmQo4",
      authDomain: "classtest-39755.firebaseapp.com",
      projectId: "classtest-39755",
      storageBucket: "classtest-39755.appspot.com",
      messagingSenderId: "931307774408",
      appId: "1:931307774408:web:9915514949dae13510a0fd"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
