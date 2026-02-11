
import{readFile} from "node:fs";
 import {readFileSync} from "node:fs";
 //import {readFile} from "node:fs/promises";
 readFile("file.txt", "utf8")
 .then(text => console.log("The file contains:", text));
readFile('file.txt', 'utf8', (err, text) =>{
    if (err) throw err;
    console.log("The file contains:", text);
}) 
let message = "Hello world";
console.log(message);
//If you run node without giving it a file, it provides you with a prompt
 //at which you can type JavaScript code and immediately see the result.
 console.log(process.argv)
 //see readFileSync when no asynchronicity is requred
 // see node:fs/promises to import a readFile function that uses promises