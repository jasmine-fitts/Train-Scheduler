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
  $("form").on("submit", function(event){
    event.preventDefault();

    var name = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var time = $("#train-time").val().trim();
    var frequency = $("#train-frequency").val().trim();

    console.log(name);
    console.log(destination);
    console.log(time);
    console.log(frequency);

//Created local object for holding train data
    var newTrain = {
        train: name,
        destination: destination,
        time: time, 
        frequency: frequency,
        
    
    };

    

    //Code for setting values in the database//

    // database.ref().on("child_added", (snap) (newTrain);

    // // console.log(newTrain.name);
    // (newTrain.destionation);
    // (newTrain.time);
    // (newTrain.frequency);
        
     
  });

  //Code to app to calculate when the next train will arrive  --- this should be relative until the current time

  //