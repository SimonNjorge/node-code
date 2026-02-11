import { readFile } from "node:fs/promises";
import { resolve, sep, join } from "node:path";
import { stat, readdir } from "node:fs/promises";

//console.log( await readFile("hello.txt", "utf8").then(
    //console.log
//), resolve("hello.txt") )
let files = process.argv.slice(3);
let matches = [];
let searchTerm = process.argv[2];
let exp = new RegExp(searchTerm);
let dirPath;

async function search (files) {
    for(let file of files) {
        let fileContent;
        let filePath// = resolve(file);
        
        //let filePath;

        if(dirPath){
            filePath = resolve(dirPath + sep + file)
            console.log(filePath);
        } else{
            filePath = resolve(file);
             console.log(filePath);
        }
     
        let stats = await stat(filePath);
        if(stats.isDirectory()) {
            let dir = await readdir(filePath);
            dirPath = file;
            console.log(dirPath);
            search(dir)
        }
        
        //console.log(stats);
        if(dirPath) {
            console.log(file)

            await readFile(, "utf8").then(text => {
                fileContent = text;
            });
        } else {
             await readFile(file, "utf8").then(text => {
                fileContent = text;
          });
        }
        /*
        await readFile(file, "utf8").then(text => {
            fileContent = text;
        });
*/
        let match = exp.exec(fileContent);
        if(match){
           matches.push(
            `${filePath} matched at index ${match.index}`
          );
        }
    }  
    return matches;
}
search(files).then(console.log);
console.log(join('hello', 'my'));