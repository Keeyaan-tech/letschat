//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDrGm9pukVdQbtjO64HkDxqan5b07MBvCw",
    authDomain: "lets-chat-1e11a.firebaseapp.com",
    databaseURL: "https://lets-chat-1e11a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-1e11a",
    storageBucket: "lets-chat-1e11a.appspot.com",
    messagingSenderId: "516392892530",
    appId: "1:516392892530:web:65cc16199117d5f1a1aaeb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();