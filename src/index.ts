import { createServer } from "node:http";
import { handleRequest } from "./infrastructure/http/handleRequest.js";

const port = 3000;
const hostname = '127.0.0.1';

const server = createServer(handleRequest);

server.listen(port, hostname, () => {
    console.log('server running right now');
});
