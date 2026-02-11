import {createServer} from "node:http";
import { loggr } from "./filesystem.js";

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
    response.end();
 });

server.listen(80, () => {
    console.log("Listening! (port 8000)");
});

//loggr();
