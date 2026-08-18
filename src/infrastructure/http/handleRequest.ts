import {
    IncomingMessage,
    ServerResponse
} from "node:http";

import { readBody } from "./readBody.js";
import { createBusiness, getBusinesses } from "../../application/businessService.js";

export const handleRequest = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    if (req.method === "GET" && req.url === "/businesses") {
        const businesses = getBusinesses();

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(businesses));

        return;
    }

    if (req.method === "POST" && req.url === "/businesses") {
        const body = await readBody(req);
        const data = JSON.parse(body);

        const business = createBusiness(
            data.name,
            data.description
        );

        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(business));

        return;
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        message: "Not Found"
    }));
};