const firebaseConfig = {
      apiKey: "AIzaSyCrQUZoRZQVpeumVcxEEvLyaORYrsFxvNc",
      authDomain: "clase-100-dd10a.firebaseapp.com",
      databaseURL: "https://clase-100-dd10a-default-rtdb.firebaseio.com",
      projectId: "clase-100-dd10a",
      storageBucket: "clase-100-dd10a.appspot.com",
      messagingSenderId: "27635576483",
      appId: "1:27635576483:web:1d0e51b3684a819b065916"
    };
    
    
    const app = firebase.initializeApp(firebaseConfig);
function send()
 {
      msg = document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inicia código
 
//Termina código
      } });  }); }
getData();
