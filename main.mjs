import { reverse } from "./reverse.mjs";
//to find the command line arguments given to your script, you can
 //read process.argv,
let arg = process.argv[2];
console.log(reverse(arg));