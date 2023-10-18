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
function addRoom()
{
      room_name = document.getElementById("room_name").Value;

      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
       console.log("Nombre de la sala: " + Room_names);
       row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

