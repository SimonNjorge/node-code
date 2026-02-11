import { createServer } from "node:http";
// This code creates a server that reads request
//  bodies and streams them
 //back to the client as all-uppercase text
createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    req.on("data", (chunk) => {
        res.write(chunk.toString().toUppercase());
    });
    res.write(`am on`);
    req.on("end", () => {
        res.end();
    });
}).listen(7000)
console.log('server listening');