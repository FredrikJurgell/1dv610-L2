# Vision
This application is for you who wants a summory of the code you have written. It should hopfully help you write better code.


# Requirements
* The user should be presented with a table of the collected data.
* The user should know if a line is longer than 125 characters.
* The user should get an average of comments per line.
* The user should get an average of characters per line.
* The user should be able to select which file thats analyzed when starting the application.
* All output should be presented in the console.
* When no filename is entered the application should not start and tell the user a filename must be entered.


# Testing
| Testcase | Whats being tested | How it's tested | Expected result | PASS/FAIL |
|:-:|----------|-------------|------|------|
| TC1. | Start the application with a filename |  Start the application by entering "npm start my-rock-paper-scissors-application.js" | The application starts and output is presented in the console | PASS |
| TC2. | The application prints out a table with analyzed data | Start the application by entering "npm start my-rock-paper-scissors-application.js" | The file is analyzed and the application prints out the analyzed file in a table  | PASS |
| TC3. | The application prints out the average of number of comments per line | Start the application by entering "npm start my-rock-paper-scissors-application.js" | The file is analyzed and the application prints out "There's an average of 0.05 comments per line." | PASS |
| TC4. | The application prints out the average of characters per line | Start the application by entering "npm start my-rock-paper-scissors-application.js" | The file is analyzed and the application prints out "There's an average of 30 characters per line." | PASS |
| TC5. | The application prints out the longest line | Start the application by entering "npm start my-rock-paper-scissors-application.js" | The file is analyzed and the application prints out "The longest line is over 125 (194) characters, you should consider shortening it. It's found on line 189." | PASS |
| TC5. | Start the application without a filename | Start the application by entering "npm start" | "Invalid filename" is printed out in the console. | FAIL |