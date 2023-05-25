var firebaseConfig = {
      apiKey: "AIzaSyBP8L_Ye3YMWqo-fBIeRimUKRCjrunqAf0",
      authDomain: "kwitter-83c87.firebaseapp.com",
      databaseURL: "https://kwitter-83c87-default-rtdb.firebaseio.com",
      projectId: "kwitter-83c87",
      storageBucket: "kwitter-83c87.appspot.com",
      messagingSenderId: "170343304131",
      appId: "1:170343304131:web:bea4b0eb2fb4c1bbb24b76"
    };
    
    
     firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
  function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update(
            {
                  purpose : "adding room name"

            });
            localStorage.setItem("room_name",room_name);
            window.location = "kwitter_page.html"
      
}
  


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

 
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
