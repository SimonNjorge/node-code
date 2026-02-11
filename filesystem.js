//callback based variant
import { readFile, writeFile, readdir,
   stat, rename, unlink } from "node:fs";
//promises variant
//import {readFile } from "node:fs/promises"

/*
//synchronous variant; no callback
import {readFileSync} from "node:fs";
 console.log("The file contains:",
 readFileSync("file.txt", "utf8"));
*/
readFile('./test/file.txt',
  'utf8', (err, data) => {
    console.log("The file contains:", data);
});

readFile('./test/file2.txt', (err, buffer) => {
    if (err) throw err;
    console.log('the file contained', buffer.length, 'bytes',
   'the first byte is:', buffer[0])
});

 writeFile("./test/graffiti.txt", "Node was here", err => {
  if (err) console.log(`Failed to write file: ${err}`);
  else console.log("File written.");
 });

//Gives the files in  a directory as an array of strings
 readdir('./test', (err, data) => {
  console.log(data);
 });

stat('./test/file2.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
 });
/*
rename('./test/graffiti.txt', './test/file2.txt', (err) => {
  if (err) throw err;
  console.log('file renamed');
 });
*
unlink('./test/file.txt', (err) => {
  if (err) throw err;
  console.log('file was unlinked')
})
*/
export const loggr = () => {
  console.log('i was exported')
};