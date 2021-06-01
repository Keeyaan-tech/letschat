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
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
getData();