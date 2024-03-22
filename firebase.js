// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD2zYYd0gQfqhVLfgFHssfLoCw-v4OHgis",
    authDomain: "portfolio-kanbs.firebaseapp.com	",
    projectId: "portfolio-kanbs",
    storageBucket: "gs://portfolio-kanbs.appspot.com",
    appId: "1:332844122551:web:0ded2e54abd7a23dc6a832"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firestore service
  var db = firebase.firestore();

  // Function to track visitor IP address
  function trackVisitor() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      const timestamp = new Date();
      // Add visitor data to Firestore
      db.collection("visitors").add({
        ipAddress: ipAddress,
        timestamp: timestamp
      })
      .then(docRef => {
        console.log("Visitor added with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding visitor: ", error);
      });
    })
    .catch(error => {
      console.error("Error fetching IP address: ", error);
    });
  }

  // Call trackVisitor function when the page loads
  document.addEventListener("DOMContentLoaded", trackVisitor);

