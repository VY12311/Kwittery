
var firebaseConfig = {
      apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw",
      authDomain: "kwitter-6abca.firebaseapp.com",
      databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com",
      projectId: "kwitter-6abca",
      storageBucket: "kwitter-6abca.appspot.com",
      messagingSenderId: "231606977400",
      appId: "1:231606977400:web:d2d2878892c4b97584fe8d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

user_name = localStorage.getItem("Username");

document.getElementById("User_name").innerHTML = "Welcome " + user_name + "!";

function logOut() {
      window.location = "index.html";
      alert("Logging you out.");
}
