var firebaseConfig = {
      apiKey: "AIzaSyBl3bROUAJQZAspuIS5kiHCUTMWefh0CEw",
      authDomain: "kwitter-d4ccc.firebaseapp.com",
      databaseURL: "https://kwitter-d4ccc-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4ccc",
      storageBucket: "kwitter-d4ccc.appspot.com",
      messagingSenderId: "491849065730",
      appId: "1:491849065730:web:6a4887136ba58d1fb28e1b"
    };

firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick=!redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();


function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"    
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location  = "kwitter.html";
}

