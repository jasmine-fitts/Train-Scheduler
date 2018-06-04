// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4q2A9pB5yR0ieWWRlSI9WS_c_BJe2wnc",
    authDomain: "train-scheduler2-5787b.firebaseapp.com",
    databaseURL: "https://train-scheduler2-5787b.firebaseio.com",
    projectId: "train-scheduler2-5787b",
    storageBucket: "",
    messagingSenderId: "858088627198"
  };
  firebase.initializeApp(config);

   var database = firebase.database();
   console.log(firebase)

    $("#send").click(function(){
        event.preventDefault();

    var name = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var time = $("#train-time").val().trim();
    var frequency = $("#train-frequency").val().trim();

   var newTrain = {
       name: name,
       destination: destination,
       time: time, 
       frequency: frequency, 
   
   };

   console.log("hi")
   console.log(newTrain);
   database.ref().push(newTrain).key;
    })
