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

   var name = "";
   var destination = "";
   var frequency = "";
   var time = "";
   var minutesAway = "";
   var nextArrival = ""
   
   

    $("#send").click(function(){
        event.preventDefault();

    var name = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var frequency = $("#train-frequency").val().trim();
    var time = $("#train-time").val().trim();
    
    
   var newTrain = {
       name: name,
       destination: destination,
       frequency: frequency, 
       time: time, 
       minutesAway: minutesAway,
       nextArrival: nextArrival,
   
   };

   //Clears all of the input fields
   $("#train-name").val("");
   $("#train-destination").val("");
   $("#train-frequency").val("");
   $("#train-time").val("");
 
  
   database.ref().push(newTrain).key;

   database.ref().on("child_added", function(snapshot){
    console.log(snapshot.val());

    var htmlToAppend = `
    <tr>
      <td>${snapshot.val().name}</td>
      <td>${snapshot.val().destination}</td>
      <td>${snapshot.val().frequency}</td>  
      <td>${snapshot.val().nextTrain}</td>
      <td>${snapshot.val().minutesUntilArrival}</td>
      
    </tr>
  `
  $(".table tbody").append(htmlToAppend)
 

// Code the app to calculate when the next train will arrive - this should be relative to the current time

tFrequency = frequency;

firstTime = time;

minutesUntilArrival = minutesAway; 
nextTrain =   nextArrival;


var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

var currentTime = moment()
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

var timeRemaining = diffTime % tFrequency 
 console.log(timeRemaining);

 var minutesUntilArrival = tFrequency - timeRemaining
 console.log("MINUTES UNTIL ARRIVAL: " + minutesUntilArrival);

 var nextTrain = moment().add(minutesUntilArrival, "m").format();
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("h:mm A"));

    var newTrain = {
        name: name,
        destination: destination,
        frequency: frequency, 
        time: time, 
        minutesAway: minutesAway,
        nextArrival: nextArrival,
    
    };

}) 
    });

