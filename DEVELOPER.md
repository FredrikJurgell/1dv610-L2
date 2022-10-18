# Testing
| Testcase | Whats being tested | How it's tested | Expected result | PASS/FAIL |
|:-:|----------|-------------|------|------|
| TC1. | Start the application with a filename |  Start the application by entering "npm start my-rock-paper-scissors-application.js" | The application starts and output is presented in the console | PASS |
| TC2. | The application prints out a table with analyzed data | Start the application by entering "npm start my-rock-paper-scissors-application.js" | The file is analyzed and the application prints out the analyzed file in a table  | PASS |
| TC3. | The application prints out the average of number of comments per line | Start the application by entering "npm start my-rock-paper-scissors-application.js" | The file is analyzed and the application prints out "There's an average of 0.05 comments per line." | PASS |
| TC4. | The application prints out the average of characters per line | Start the application by entering "npm start my-rock-paper-scissors-application.js" | The file is analyzed and the application prints out "There's an average of 30 characters per line." | PASS |
| TC5. | The application prints out the longest line | Start the application by entering "npm start my-rock-paper-scissors-application.js" | The file is analyzed and the application prints out "The longest line is over 125 (194) characters, you should consider shortening it. It's found on line 189." | PASS |
| TC5. | Start the application without a filename | Start the application by entering "npm start" | "Invalid filename" is printed out in the console. | FAIL |