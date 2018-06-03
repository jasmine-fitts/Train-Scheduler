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

  console.log(firebase);

  var database = firebase.database();


  $(".btn-primary").on("click", function(){
    event.preventDefault();

     name = $("#train-name").val().trim();
     destination = $("#train-destination").val().trim();
     time = $("#train-time").val().trim();
     frequency = $("#train-frequency").val().trim();

    console.log(name, destination, frequency, time);

    //Code for setting values in the database//

    database.ref().push({
        name = name,
        estination = trainDestination,
        time = trainTime,
        frequency = trainFrequency
    });
  });