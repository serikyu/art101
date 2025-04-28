// index.js - Arrays and Objects
// Author: Ren Buendia
// Date: April 28th, 2025

// Variables

var myTransport = ["Mazda3", " Bus", " Walking"]

var myMainRide = {
    make: "Mazda",
    model: "Mazda3",
    color: "Blue Mica",
    year: 2021,
    // function for age of the car
    age: function() {
        return 2025 - this.year;
    }
}

// output

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");