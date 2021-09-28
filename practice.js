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
   firebase.initializeApp = initializeApp(firebaseConfig);
  function addUser()
{
user_name = document.getElementById("user_name").value ;
firebase.database().ref("/").child(user_name). update({
purpose:"adding user"

});
}

