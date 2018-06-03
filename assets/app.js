// Initialize Firebase
var config = {
     apiKey: "AIzaSyDm7iLTMVXRp-gZjl0CeIleVMmT2XKUe2I",
     authDomain: "train-scheduler-8f1d4.firebaseapp.com",
     databaseURL: "https://train-scheduler-8f1d4.firebaseio.com",
     projectId: "train-scheduler-8f1d4",
     storageBucket: "train-scheduler-8f1d4.appspot.com",
     messagingSenderId: "1033840179244"
   };
   firebase.initializeApp(config);

   var database = firebase.database();
   console.log(firebase)

// Submit button for adding a new train
  $("#submit").on("click", function(event){
    event.preventDefault();

    var name = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var time = $("#train-time").val().trim();
    var frequency = $("#train-frequency").val().trim();

//Created local object for holding train data
    var newTrain = {
        train: trainName,
        destination: trainDestination,
        time: trainTime, 
        frequency: trainFrequency,
        
    
    };

    

    //Code for setting values in the database//

    database.ref().push(newTrain);

    console.log(newTrain.name);
    (newTrain.destionation);
    (newTrain.time);
    (newTrain.frequency);
        
     
  });

  //Code to app to calculate when the next train will arrive  --- this should be relative until the current time

  //