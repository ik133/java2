    //           #1

    //         var a = 4
    //         var b = 3
    //         var c = --b + --a - ++b + a++ - --a;
    //         console.log(c)
            
    //             # 2

    //             var a = 2
    //             var b = 3
    //             var c = --a;
    //             console.log(c)

    //           var c =  --a - --b;
    //           console.log(c)
              
    //           var c = --a - --b + ++b;
    //           console.log(c)

    //           var c = --a - --b + ++b + b--;
    //           console.log(c)

    //         # 3

    //         firstname = prompt("Enter Your firstName" ,"Baber");
    //         lastname = prompt("Enter Your Last Name" ,"Azem" );

    //         var fullname = firstname + " " + lastname;
            
    //         console.log(fullname)

    //         Taking input from the user
    // var userInput = prompt("Please enter a number for the multiplication table:");

    // Convert user input to a number, or use default value if not provided
    // var number = userInput ? parseInt(userInput) : 5;

    // Display the multiplication table
    // document.write(`<h2>Multiplication Table of {number}</h2>`);
    // for (var i = 1; i <= 10; i++) {
    //     document.write(`{number} x {i} = {number * i}<br>`);
    // }
    
   // Taking input from user 
//    var subject1 = prompt("Enter the name of the first subject:");
//    var subject2 = prompt("Enter the name of the second subject:");
//    var subject3 = prompt("Enter the name of the third subject:");

//    // Total marks for each subject
//    var totalMarks = 100;

//    // obtained marks from user 
//    var obtainedMarksSubject1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
//    var obtainedMarksSubject2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
//    var obtainedMarksSubject3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

//    // Calculating total obtained marks and percentage
//    var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
//    var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

//    // Displaying the result
//    document.write("<table border='1'>");
//    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
//    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
//    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
//    document.write("</table>");

//    document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
//    document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


         //Asignment # 9-10

        //  var city_name = prompt("Enter a city name:");
        //  if (city_name.toLowerCase() === "karachi") {
        //      console.log("Welcome to the city of lights");
        //  } else {
        //      console.log("Welcome to city of lights" + city_name);
        //  }

//         const gender = prompt("Please enter your gender (male/female):");

// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am.");
// } else {
//     alert("Invalid input. Please enter either 'male' or 'female'.");
// }

// function showMessage(color) {
//     switch (color) {
//         case 'red':
//             console.log("Stop! The light is red.");
//             break;
//         case 'yellow':
//             console.log("Prepare to stop. The light is about to turn red.");
//             break;
//         case 'green':
//             console.log("Go ahead! The light is green.");
//             break;
//         default:
//             console.log("Invalid color input.");
//             break;
//     }
// }
// var userColor = prompt("Enter the color of the traffic signal (red, yellow, green):");
// userColor = userColor.toLowerCase();
// showMessage(userColor);

// Function to check remaining fuel and display message
// function checkFuel() {
//     var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

//     if (isNaN(remainingFuel)) {
//         console.log("Invalid input. Please enter a valid number.");
//     } else {
//         if (remainingFuel < 0.25) {
//             console.log("Please refill the fuel in your car.");
//         } else {
//             console.log("You have enough fuel in your car.");
//         }
//     }
// }
// // Calling the function to check fuel
// checkFuel();


// Prompt the user for temperature input
// const temperature = parseFloat(prompt("Enter the temperature:"));

// // Check temperature and display message based on criteria
// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
// } else {
//     console.log("It's extremely cold outside!");
// }

          //  Assignment #  12-13


        //   function checkCharacterType(character) {
        //     const charCode = character.charCodeAt(0);
            
        //     if (charCode >= 48 && charCode <= 57) {
        //         console.log(`${character} is a number.`);
        //     } else if (charCode >= 65 && charCode <= 90) {
        //         console.log(`${character} is an uppercase letter.`);
        //     } else if (charCode >= 97 && charCode <= 122) {
        //         console.log(`${character} is a lowercase letter.`);
        //     } else {
        //         console.log(`${character} is not a number or letter.`);
        //     }
        // }
        // const userInput = prompt("Enter a character:"); 
        // checkCharacterType(userInput);
        

        // Function to compare two integers and display the larger one
// function compareAndDisplay(a, b) {
//     if (a > b) {
//       console.log(`${a} is larger.`);
//     } else if (b > a) {
//       console.log(`${b} is larger.`);
//     } else {
//       console.log("Both integers are equal.");
//     }
//   }
//   const input1 = parseInt(prompt("Enter the first integer:"));
//   const input2 = parseInt(prompt("Enter the second integer:"));
//   compareAndDisplay(input1, input2);
  


// var userInput = prompt("Enter a number:");
// var number = parseFloat(userInput);

// if (number > 0) {
//     console.log("The entered number is positive.");
// } else if (number < 0) {
//     console.log("The entered number is negative.");
// } else {
//     console.log("The entered number is zero.");


// // Store correct password in a variable
// const correctPassword = "secretpassword";

// // Ask user to enter their password
// const userInput = prompt("Enter your password:");

// // Validate the password
// if (userInput === "") {
//     console.log("Please enter your password");
// } else if (userInput === correctPassword) {
//     console.log("Correct! The password you entered matches the original password");
// } else {
//     console.log("Incorrect password");
// }

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }