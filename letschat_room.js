var firebaseConfig = {
    apiKey: "AIzaSyDZGZPtnYisSAMFdFh_k1D5TFv9NLWPwhM",
    authDomain: "lets-chat-b5324.firebaseapp.com",
    projectId: "lets-chat-b5324",
    storageBucket: "lets-chat-b5324.appspot.com",
    messagingSenderId: "873668410105",
    appId: "1:873668410105:web:768e93d3e25a97091d4028",
    measurementId: "G-3H3QRBK6MG"
  };
  
 
  // Initialize Firebase
  firebase.initializeApp  = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
  function addRoom()
  {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name", room_name);
  window.location = "lets chat_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
  getData();
  function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "lets chat_page.html";
  }
  function logout()
  {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
  }