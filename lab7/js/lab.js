// index.js - Functions
// Author: Ren Buendia
// Date: May 4th, 2025

// Functions
function sortUserName() {
    var userName = window.prompt("What is your name?");
    console.log("userName = ", userName);
    // Split string into array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    // Sort array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);
    // Join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);
    return nameSorted;
}

// Output
document.writeln("Here is your sorted name: ",
    sortUserName(), "</br>");

    